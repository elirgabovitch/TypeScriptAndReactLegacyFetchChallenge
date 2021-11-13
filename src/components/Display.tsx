const Display = (props: any) => {
    return(
        <div>
            <h3>Current temperature at your location: {props.weather}</h3>
        </div>
    )
}

export default Display;