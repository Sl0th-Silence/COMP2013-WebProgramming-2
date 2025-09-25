//this is to help understand buttons and lambda functions

const messageOnClick = (msg) => console.log(msg);

export default function ButtonFun({message, buttonText}){
    return(
        <div>
            <button onClick={messageOnClick(message)}>{buttonText}</button>
        </div>
    )
}