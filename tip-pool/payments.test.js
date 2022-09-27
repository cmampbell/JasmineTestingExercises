describe("Testing submit payment info function", function(){
    it("should clear the values after we submit", function(){
        submitPaymentInfo();
        expect(billAmtInput.value).toEqual('');
        expect(tipAmtInput.value).toEqual('');
    })
})


describe("Testing createCurPayment function return values", function() {

    it("Should return an object with the correct values", function(){
        billAmtInput.value = 100;
        tipAmtInput.value = 20;

        expect(createCurPayment()).toEqual({billAmt: '100', tipAmt: '20', tipPercent: 20});
    })

    it("Should return nothing if amounts are empty", function(){
        billAmtInput.value = '';
        tipAmtInput.value = '';

        expect(createCurPayment()).toBeFalsy();
    })

    afterAll(function(){
        billAmtInput.value = '';
        tipAmtInput.value = '';
    })
})

describe("Testing appendPayment Table", function(){
    it("Should only append table rows equal to the number of keys in allPayments", function(){
        allPayments = {
            'payment 1': {
                billAmt: 100,
                tipAmt: 20,
                tipPercent: 20
            },
            'payment 2': {
                billAmt: 200,
                tipAmt: 20,
                tipPercent:10
            }
        }

        for(let key in allPayments){
            appendPaymentTable(allPayments[key]);
        }
        expect(paymentTbody.children.length).toEqual(Object.keys(allPayments).length);
    })

    afterAll(function(){
        allPayments = {};
        let tableRows = paymentTbody.children.length;
        let i = 0;
        while(i < tableRows){
            paymentTbody.firstElementChild.remove();
            i++;
        };
    })
})


describe("Testing updateSummary to check td values are correct", function(){

    it("should have updated summary tds with the correct values", function(){
        allPayments = {
            'payment 1': {
                billAmt: 100,
                tipAmt: 20,
                tipPercent: 20
            },
            'payment 2': {
                billAmt: 200,
                tipAmt: 20,
                tipPercent:10
            }
        }

        updateSummary()

        expect(summaryTds[0].innerText).toEqual('$300');
        expect(summaryTds[1].innerText).toEqual('$40');
        expect(summaryTds[2].innerText).toEqual('15%');
    })

    afterAll(function(){
        allPayments = {};
        for(let text of summaryTds){
            text.innerText = '';
        }
    })
})