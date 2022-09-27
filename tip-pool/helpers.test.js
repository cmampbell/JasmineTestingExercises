describe("sumPaymentTotal testing output", function() {
    beforeEach(function(){
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
    }) 

    it('Should return the expected totals', function(){
        expect(sumPaymentTotal('billAmt')).toEqual(300);
        expect(sumPaymentTotal('tipAmt')).toEqual(40);
        expect(sumPaymentTotal('tipPercent')).toEqual(30);
    })

    afterEach(function(){
        allPayments = {};
    })
})

describe("Testing math of calculateTipPercent", function(){
    it("Should calculate the tip percent between a bill and a tip amount", function() {
        expect(calculateTipPercent(100, 20)).toEqual(20);
        expect(calculateTipPercent(0, 0)).toEqual(NaN);
        expect(calculateTipPercent(350, 40)).toEqual(11);
    })
})

describe("Testing that appendTd adds a child to td, increasing length", function(){
    let tbody;
    let testTr;

    beforeEach(function(){
        tbody = document.querySelector("#serverTable tbody")
        testTr = document.createElement('tr');

        tbody.append(testTr);
    })
    
    it("Should append a td to a tr, increasing tr.children length", function(){
        appendTd(testTr, 'Matt');
        expect(testTr.children.length).toEqual(1);
        appendTd(testTr, 'Matt');
        expect(testTr.children.length).toEqual(2);
    })

    afterEach(function(){
        for(let child of tbody.children){
            child.remove();
        }
    })
})

// function appendDeleteBtn(tr){
//     let deleteTd = document.createElement('td')
//     deleteTd.innerText = 'X';
  
//     deleteTd.addEventListener("click", function(e){
//       e.target.parentElement.remove();
//     })
//     tr.append(deleteTd);
//   }

describe("Testing appendDeleteBtn functionality on server table", function() {
    let tbody;
    let testTr;

    beforeEach(function(){
        tbody = document.querySelector("#serverTable tbody")
        testTr = document.createElement('tr');

        tbody.append(testTr);
    })
    
    it('Should be appended to the server body tr as the last child', function(){
        appendTd(testTr, 'Matt');
        appendDeleteBtn(testTr);
        expect(testTr.lastElementChild.innerText).toEqual('X');
    })

    afterEach(function(){
        for(let child of tbody.children){
            child.remove();
        }
    })
})