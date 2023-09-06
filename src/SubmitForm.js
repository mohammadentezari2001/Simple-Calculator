import {useForm} from 'react-hook-form'

const SubmitForm=()=>{

    const {register,handleSubmit}=useForm()

    const f1=(data)=>{
        console.log(data)
    }


    return(
        <form style={{textAlign:"center"}} onSubmit={handleSubmit(f1)}>

        <label >name</label>
        <input type="text" {...register('name')} />
        <label>age</label>
        <input type="number" {...register('age')} />
        <label>City</label>
        <input type="text" {...register('city')} />
        <br/>
        <input style={{backgroundColor:"green",color:'wheat'}} type="submit" />

        </form>

    )
}

export default SubmitForm;