

function addWork(elementId, elementTitle, elementContent) {
    const test = document.getElementById('myWorkAccordion');
    
    const newWorkItem = document.createElement('div');
    const header = document.createElement('h2');
    const accButton = document.createElement('button');
    const collapseBody = document.createElement('div');
    const accBody = document.createElement('div');
    const cardBody = document.createElement('div');
    const imageBody = document.createElement('div');
    const image = document.createElement('img');
    const textBody = document.createElement('div');
    const text = document.createElement('p');

    newWorkItem.appendChild(header);
    newWorkItem.appendChild(collapseBody);

    header.appendChild(accButton);

    collapseBody.appendChild(accBody);

    accBody.appendChild(cardBody);

    cardBody.appendChild(imageBody);
    cardBody.appendChild(textBody);

    imageBody.appendChild(image);

    textBody.appendChild(text);
    
    newWorkItem.setAttribute('class', 'accordion-item');
    newWorkItem.setAttribute('id', `${elementId}`);

    header.setAttribute('class', 'accordian-header');
    header.setAttribute('id', `heading${elementId}`);
    
    accButton.setAttribute('class','accordion-button collapsed');
    accButton.setAttribute('id','acc-btn');
    accButton.setAttribute('type','button');
    accButton.setAttribute('data-bs-toggle','collapse');
    accButton.setAttribute('data-bs-target',`#collapse${elementId}`);
    accButton.setAttribute('aria-expanded','false');
    accButton.setAttribute('aria-controls',`collapse${elementId}`);

    collapseBody.setAttribute('id',`collapse${elementId}`);
    collapseBody.setAttribute('class','accordion-collapse collapse');
    collapseBody.setAttribute('aria-labelledby',`heading${elementId}`);
    collapseBody.setAttribute('data-bs-parent','#myWorkAccordian');

    accBody.setAttribute('class','accordian-body');

    cardBody.setAttribute('id','content-section2');
    cardBody.setAttribute('class','text-resize');

    image.setAttribute('src','./assets/bezosMuseumDonations.jpg');
    image.setAttribute('alt', 'temp-img');

    textBody.setAttribute('id','about-1-text');

    accButton.textContent = elementTitle;

    text.textContent = elementContent;

    test.appendChild(newWorkItem);
}