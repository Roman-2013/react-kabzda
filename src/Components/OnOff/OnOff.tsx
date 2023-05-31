type StatePropsType = {
    state: boolean
}
export const OnOff = (props: StatePropsType) => {
    if(props.state===true){
        return <>
            <button style={{backgroundColor:"green"}}>On</button>
            <button >Off</button>
            <button  style={
                {
                    borderRadius: '50px',
                    width: '20px',
                    height: '20px',
                    marginLeft: '10px',
                    marginTop: '10px',
                    backgroundColor:"green"
                }}
            ></button>
        </>

}else {
        return <>
            <button >On</button>
            <button style={{backgroundColor:"red"}}>Off</button>
            <button  style={
                {
                    borderRadius: '50px',
                    width: '20px',
                    height: '20px',
                    marginLeft: '10px',
                    marginTop: '10px',
                    backgroundColor:"red"
                }}
            ></button>
        </>

    }
}