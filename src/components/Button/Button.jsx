import classes from './Button.module.css'

const Button = ({ callback, color, label }) => {
    // const { callback, color, label } = props
    console.log('render del boton')
    return <button onClick={callback} className={classes.color} style={{ color: color }}>{label}</button>
}

export default Button