export function renderPoll(questionObj, value1Obj, count1Obj, value2Obj, count2Obj){
    const pastDisplayEl = document.createElement('div');
    const questionEl = document.createElement('h2');
    const option1El = document.createElement('h4');
    const count1El = document.createElement('p');
    const option2El = document.createElement('h4');
    const count2El = document.createElement('p');

    questionEl.textContent = questionObj;
    option1El.textContent = value1Obj;
    count1El.textContent = count1Obj;
    option2El.textContent = value2Obj;
    count2El.textContent = count2Obj;

    pastDisplayEl.append(questionEl, option1El, count1El, option2El, count2El);

    return pastDisplayEl;
}