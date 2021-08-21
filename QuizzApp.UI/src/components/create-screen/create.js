import React, { useContext, useState } from 'react';
import axios from 'axios';
import { AppContext } from '../../appContext';

export const Create = () => {

    const [isMultipleMode, setmMltipleMode] = useState(false);
    const [quote, setQuote] = useState("");
    const [quoteOwner, setQuoteOwner] = useState("");
    const [randomOwner, setRandomOwner] = useState("");
    const [ownerA, setOwnerA] = useState("");
    const [ownerB, setOwnerB] = useState("");
    const [ownerC, setOwnerC] = useState("");
    const [error, setError] = useState("");
    const [successMsg, setSuccessMsg] = useState("");

    const handleSubmit = () => {
        setSuccessMsg("");
        setError("");

        if (isFormValid()) {
            let quoteToCreate = {
                quoteText: quote,
                realQuoteOwner: quoteOwner,
                quoteOwnerA: ownerA,
                quoteOwnerB: ownerB,
                quoteOwnerC: ownerC,
                RandomQuoteOwner: randomOwner,
                type: isMultipleMode ? 1 : 0
            }

            axios.post('https://localhost:5001/api/quote', quoteToCreate)
                .then(res => {
                    console.log(res.data.success)
                    if (res.data.success) {
                        resetForm();
                        setSuccessMsg("Quote created successfully");
                    } else {
                        setError(res.data.error)
                    }
                })
                .catch(() => { setError("Something went wrong") });
        } else {
            setError("fill all fields")
        }
    }

    const handleModeChange = () => {
        setmMltipleMode(!isMultipleMode);
    }

    const resetForm = () => {
        setQuote("");
        setQuoteOwner("");
        setRandomOwner("");
        setOwnerA("");
        setOwnerB("");
        setOwnerC("");
        setError("");
    }

    const isFormValid = () => {
        if (isMultipleMode) {

            if (quote === "" || quoteOwner === "" || ownerA === "" || ownerB === "" || ownerC === "") return false;
        } else {
            if (quote === "" || quoteOwner === "" || randomOwner === "") return false;
        }
        return true;
    }

    return (
        <div className='col-lg-6 mx-auto mt-4'>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" onChange={handleModeChange} value={isMultipleMode} />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Multiple mode question
                </label>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Quote</label>
                <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Enter quote" required onChange={(e) => { setQuote(e.target.value) }} value={quote} />
            </div>

            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Quote Owner</label>
                <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Enter quote owner" required onChange={(e) => { setQuoteOwner(e.target.value) }} value={quoteOwner} />
            </div>

            {!isMultipleMode ? <div className="form-group">
                <label htmlFor="exampleInputEmail1">Random owner</label>
                <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Enter random quote owner" required onChange={(e) => { setRandomOwner(e.target.value) }} value={randomOwner} />
            </div> : <><div className="form-group">
                <label htmlFor="exampleInputEmail1">Quote Owner A</label>
                <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Enter quote owner A" required onChange={(e) => { setOwnerA(e.target.value) }} value={ownerA} />
            </div>

                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Quote Owner B</label>
                    <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Enter quote owner B" required onChange={(e) => { setOwnerB(e.target.value) }} value={ownerB} />
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Quote Owner C</label>
                    <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Enter quote owner C" required onChange={(e) => { setOwnerC(e.target.value) }} value={ownerC} />
                </div></>}

            {error !== "" ? <div className="alert alert-danger mt-3" role="alert">
                {error}
            </div> : null}

            {successMsg !== "" ? <div className="alert alert-success mt-3" role="alert">
                {successMsg}
            </div> : null}

            <button type="submit" className="btn btn-primary" style={{ marginTop: 5 }} onClick={handleSubmit}>Create Quote</button>
        </div>

    )
}
