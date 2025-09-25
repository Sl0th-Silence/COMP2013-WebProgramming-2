//Not the correct way to manip and reload counter

export default function BadCounter(){
    let count = 0;
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => {
                console.log(count);
            }}>Click</button>
        </div>
    )
}