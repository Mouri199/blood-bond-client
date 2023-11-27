

const ContactUs = () => {
    return (
        <div>
            <div className="lg:flex items-center my-10 lg:mx-52 gap-10 mx-10">
                <div>
                    <h3 className="lg:text-5xl text-4xl font-lora lg:w-[600px]">
                        Contact Us
                    </h3>
                    <p className="lg:text-2xl lg:w-[700px]">
                        Celebrate cheers Bryna embarrassing coworkers guitar acoustic . Will flowers sparkles champagne. First flowers photobooth photographer limousine.
                    </p>

                    <div className="grid">
                        <input className="border p-2 mt-5" type="text" placeholder="Name" />
                        <input className="border p-2  mt-5" type="text" name="" id="" placeholder="E-mail" />
                        <input className="border p-2  mt-5" type="text" name="" id="" placeholder="Wedding Date" />

                    </div>
                    <button className="btn bg-redclr hover:bg-hoverclr text-white px-10 mt-5">send</button>
                </div>
                <div className="my-5">
                    <img className="h-[600px]" src="https://i.ibb.co/y4tCX62/blood-donation-Adobe-Stock-234194143-cfc40bb11a044a2391b25b7d25fab119.jpg" alt="" />
                </div>
            </div>
        </div>

    );
};

export default ContactUs;