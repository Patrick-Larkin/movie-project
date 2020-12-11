import React from 'react';

const SearchArea = (props) => {
    return (
        <div className="container">
            <div className="row">
                <section className="col s4 offset-s3">
                    <form action="" onSubmit={props.handleSubmit}>
                        <div className="input-field">
                            <input placeholder="Search movie" type="text" onChange={props.handleChange}></input>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    )
} 
export default SearchArea;