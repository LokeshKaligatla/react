const Contact = () => {
    return (
        <div>
            <h1 className="font-bold p-2 m-2 text-2xl text-center">Contact US</h1>
            <form className="text- bg-center">
                <input className="border border-black rounded-lg p-2 m-2" type="text" placeholder="Name" />
                <input className="border border-black rounded-lg p-2 m-2" type="text" placeholder="Message" />
                <button type="submit" className="bg-black text-white rounded-lg p-2 m-2">Submit</button>
            </form>
        </div>
    )
}

export default Contact;