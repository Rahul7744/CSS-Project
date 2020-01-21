const ADD = "ADD"

const passData = (send) => {
    console.log("action",send)
    return{
        type:"ADD",
        data1:send
    }
    


}

export {passData}