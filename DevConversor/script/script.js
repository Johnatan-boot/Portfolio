//capturar o form

const form = document.getElementById('form');

//acionar funcao handleSubmit 
form.addEventListener('submit',handleSubmit);

const inputValue = document.getElementById('value-real');

const selectedCurrency = document.getElementById('currency');

const result = document.getElementById('result');
let valueConverted = 0;

//funcao de envio do Formulario
function handleSubmit(e){
    e.preventDefault();
    //validacao do formulario
    //se tentar enviar um campo vazio ou menor que 0
    //vai  disparar um alerta Informe um valor Correto! 
    if(!inputValue.value || inputValue.value < 0){

        alert('Informe um valor Correto!');
        return;
    }else if(!selectedCurrency.value){
        alert('Escolha uma Moeda!');
        return;

    }

    //se passou pela validação vai chamar a função converter();
    converter();

};

//função principal de converter moedas
function converter(){
    //se for igual aa euro
if(selectedCurrency.value === 'eur'){
valueConverted =inputValue.value / 6.22;
result.innerHTML = valueFormatter('pt-br', 'EUR');

 animateResult();
}else if (selectedCurrency.value === 'dol') {
    valueConverted = inputValue.value / 5.37;
    result.innerHTML = valueFormatter('em-US', 'USD');

    animateResult();


}

//limpando a informação inserida no input quando converter
inputValue.value = '';
selectedCurrency.value ='';
};

//formatar valor
function valueFormatter(locale, currency){

    const value = 
    valueConverted.
    toLocaleString(`${locale}`,
    {style:'currency', currency:
`${currency}`});
return `<span>🤑</span> ${value} <span>🤑</span>`;
};



//funcao animar resposta result
function animateResult(){
    return result.animate([
        {transform:'translateY(-150px)'},
        {transform:'translateY(0px)'},
    ],{duration:500});
};