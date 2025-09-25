//This is an event on click function aka handler

const messageOnClick = (msg) => console.log(msg);

export default function ClickerWithProps({message, btnText}){
    // if a handler has a param and needs an argument to work,
    // we must use a LAMBDA function inside the event, ie, onclick, onhover, on...etc.
    return <button onClick={() => messageOnClick(message)}>{btnText}</button>
}