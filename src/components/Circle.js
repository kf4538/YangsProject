const Circle = ({x, y, backgroundColor}) => {
    return(
        <div
            className="circle"
            style={{
                backgroundColor: backgroundColor,
                top: `${y}%`,
                left: `${x}%`

            }}
        
        />
    );
}

export default Circle;