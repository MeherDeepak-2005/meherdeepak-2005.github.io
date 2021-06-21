import React from "react"

class search extends React.Component {
    state = { title: "" };

    onChange = (event) => {
        const _title = event.target.value;
        console.log(_title);
        this.setState({ title: _title });
        console.log(_title);
    };
    onSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.title);
        this.props.onSearch(this.state.title);
    };

    render(){
         return (
             <form onSubmit={this.onSubmit} className="search">
                <input value={this.state.title} onChange={this.onChange} className="search__text" type="text" placeholder="Artist Name"/>     
                <button><a href='/' className='search__button'><i className='fas fa-search'></i></a></button>
            </form>
                )
            }

    }
export default search
