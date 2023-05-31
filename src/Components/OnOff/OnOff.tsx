type StatePropsType = {
    state: boolean
}

export const OnOff = (props: StatePropsType) => {

        return <>
            <button style={{backgroundColor:props.state ? "green":""}}>On</button>
            <button style={{backgroundColor:props.state ? "":"red"}}>Off</button>
            <button  style={
                {
                    borderRadius: '50px',
                    width: '20px',
                    height: '20px',
                    marginLeft: '10px',
                    marginTop: '10px',
                    backgroundColor:props.state ? "green":"red"
                }}
            ></button>
        </>
    }
