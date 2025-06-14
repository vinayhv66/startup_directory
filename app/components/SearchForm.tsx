import Form from "next/form";
const SearchForm = () => {
    const query = 'test'
    const reset = () => {
        const form= document.querySelector(selectors:'.search-form') as HTMLFormElement;
    
    if(form) form.reset();
}
    return(
        <Form action="/" scroll={false} className="search-form">
            <input name="query" defaultValue={query} className="search-input"  placeholder="Search for a startup" />
            <div className="flex gap-2"> 
                {query && (
                <button type="reset" onClick={reset}>Search</button>
            </div>
        </Form>
    )
}
}
export default SearchForm;