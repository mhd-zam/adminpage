let TypeField = document.getElementById('type')
let nameField= document.getElementById('name')
let phoneField=document.getElementById('phone')
let addressField = document.getElementById('addressline1')
let countryField = document.getElementById('country')
let cityField=document.getElementById('city')
let stateField=document.getElementById('state')
let pincodeField = document.getElementById('pincode')
let numberField = document.getElementById('Number')
// let Mainform=document.getElementById('main-form')



let error1 = document.getElementById('error1')
let error2 = document.getElementById('error2')
let error3 = document.getElementById('error3')
let error4 = document.getElementById('error4')
let error5 = document.getElementById('error5')
let error6 = document.getElementById('error6')
let error7 = document.getElementById('error7')
let error8 = document.getElementById('error8')
let error9 = document.getElementById('error9')

TypeField.addEventListener('change', ()=>{checkSelectField(TypeField,error1)})
nameField.addEventListener('change', ()=>{checkStringField(nameField,error2)})
phoneField.addEventListener('change', checkPhoneField)
addressField.addEventListener('change', checkAddressline)
countryField.addEventListener('change', () => { checkStringField(countryField, error5) })
cityField.addEventListener('change', () => { checkSelectField(cityField, error6) })
stateField.addEventListener('change', () => { checkStringField(stateField, error7) })
pincodeField.addEventListener('change', checkPincode)
numberField.addEventListener('change', checkNumber)


function called() {
    event.preventDefault()
    checkSelectField(TypeField,error1)
    checkStringField(nameField, error2)
    checkPhoneField()
    checkAddressline()
    checkStringField(countryField, error5)
    checkSelectField(cityField, error6)
    checkStringField(stateField, error7)
    checkPincode()
    checkNumber()
    event.submit()
}

function checkSelectField(Field,error) {

    if (Field.value == 0) {
        error.style.visibility = 'initial'
        return
    }
    error.style.visibility = 'hidden'
}

function checkStringField(Field,error) {
    let value = Field.value
    
    
    if (value.trim() === '') {
        error.style.visibility = 'initial'
        return
    }

    if (!value.match(/^[a-zA-Z]+$/)) {
        error.style.visibility = 'initial'
        error.textContent = 'should only contain letter'
        return
    }
    error.style.visibility = 'hidden'
}

function checkPhoneField() {
    
    let value = phoneField.value
    
    if (value.trim() === '') {
        error3.style.visibility = 'initial'
        return
    }

    if (!value.match(/^[0-9]+$/) || value.length != 10) {
        error3.style.visibility = 'initial'
        error3.textContent = 'please enter a valid number'
        return
    }
    error3.style.visibility = 'hidden'
}


function checkAddressline() {
    
    let value = addressField.value;
    let modifiedValue = value.replace(/[.,'-]/g, ' ');

    if (modifiedValue.trim() === '') {
        error4.style.visibility = 'initial'
        return
    }

    if (!modifiedValue.match(/^[a-zA-Z0-9]+$/)) {
        error4.style.visibility = 'initial'
        error4.textContent = 'please enter valid address'
        return
    }
    error4.style.visibility = 'hidden'

}


function checkPincode(){
    let value = pincodeField.value
    
    if (value.trim() === '') {
        error8.style.visibility = 'initial'
        return
    }

    if (!value.match(/^[0-9]+$/) || value.length != 6) {
        error8.style.visibility = 'initial'
        error8.textContent = 'should not contain letters and should be 6 digit'
        return
    }
    error8.style.visibility = 'hidden'
}


function checkNumber() {
    let value = numberField.value
    
    if (value.trim() === '') {
        error9.style.visibility = 'initial'
        return
    }

    if (!value.match(/^[0-9]+$/) || value.length !=16) {
        error9.style.visibility = 'initial'
        error9.textContent = 'should not contain letters and should be 16 digit'
        return
    }
    error9.style.visibility = 'hidden'

}

