
const Box = ({children}) => {
    const boxStyle = {
        width: '200px',
        border: '1px solid blue',
        padding: '10px',
        margin: '10px'
    }

    return (
        <div style={boxStyle}>
            {children}
        </div>
    )
}

export default Box