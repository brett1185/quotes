const Form=(props)=>{
    const {submitHandler, errors, quote, setQuote} = props
    const onChangeHandler = (e)=>{
        const newStateObject={...quote}
        newStateObject[e.target.author] =e.target.value

        setQuote(newStateObject)

    }
    return(
        <div>
            <form onSubmit={submitHandler}
                    style={{margin:'200px', display:'flex', justifyContent:'space-evenly', flexDirection:'column'}}
                    >
                <label>Who said it:</label>
                <input 
                type ='text'
                name = 'author'
                value = {quote.author}
                onChange = {onChangeHandler}/>
                {errors.author?
                <p style={{color:'red'}}>{errors.author.message}</p>
            :null}
                <br/>

                <label>Quote:</label>
                <input
                type ='text'
                name = 'quoteText'
                value = {quote.quoteText}
                onChange = {onChangeHandler}/>
                {errors.quoteText?
                <p style={{color:'red'}}>{errors.quoteText.message}</p>
            :null}
                <br/>

                <label>What category is the quote?</label>
                <select 
                value = {quote.subject} 
                name = 'subject'
                onChange = {onChangeHandler}>
                    <option value=''hidden> Please select an option</option>
                    <option value='history'>History</option>
                    <option value='philosophy'>philosophy</option>
                    <option value='humor'>humor</option>
                    <option value='family'>family</option>
                    <option value='miscellaneous'>miscellaneous</option>
                </select>
                {errors.subject?
                <p style={{color:'red'}}>{errors.subject.message}</p>:
                null}
                <br/>

                <button>Add Quote!</button>

            </form>
        </div>
    )}

    export default Form