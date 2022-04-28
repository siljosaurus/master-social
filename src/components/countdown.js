import dayjs from 'dayjs'

const Countdown = () => {
    
    const now = dayjs()
    const skolestart = dayjs('2020-08-12')
    const skoledager = skolestart.diff('2022-06-01', 'day')
    const diff = now.diff('2022-05-16', 'day')
    const prosent = (1-Math.abs(diff)/Math.abs(skoledager))*100
        
    return(
        <div className="countdown">
            <h2> Dager til masteren skal leveres: {Math.abs(diff)} </h2>
            <div style={{
                width: "100%",
                backgroundColor: "rgba(var(--sf-blue), 0.5)",
                borderRadius: "0.3rem",
                overflow: 'hidden',
            }}>
                <div style={{
                    width: `${prosent}%`,
                    height: 50,
                    backgroundColor: "rgba(var(--sf-blue), 1)",
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                }}>
                   <div style={{
                       backgroundColor: 'transparent',
                       textAlign: 'center',
                       color: '#231F20'
                   }}> {Math.abs(prosent.toFixed(0))}% ferdig </div>
                </div>
                
                </div>
        </div>
    )
}

export default Countdown;
