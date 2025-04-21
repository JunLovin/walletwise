function Contact() {
    return (
        <>
        <div className="flex gap-4 justify-around items-center text-black transition-colors duration-300 contact-container dark:text-white min-h-[90dvh] max-md:flex-col max-md:gap-20 mb-4">
            <div className="contact-left w-[50%] flex flex-col gap-4 justify-around max-md:text-center max-md:w-full">
                <div className="contact-left-title">
                    <h2 className="text-5xl font-bold leading-normal max-xl:text-4xl">¡Contáctame!</h2>
                </div>
                <div className="contact-left-description">
                    <p className="max-w-[60ch] leading-8 max-md:max-w-full">¿Listo para transformar tus finanzas? Estoy aquí para ayudarte a alcanzar tus metas financieras. Ya sea que necesites asesoría personalizada o quieras discutir cómo WalletWise puede adaptarse a tu negocio, ¡conversemos! Tu éxito financiero comienza con una simple conversación.</p>
                </div>
                <div className="mt-4 contact-left-creator">
                    <p className="text-xl font-semibold">- Said ruiz</p>
                </div>
                <div className="mt-8 max-md:mt-4 contact-left-button">
                    <button onClick={() => {
                        window.open('https://github.com/Junlovin', '_blank')
                    }} className="w-40 h-12 font-semibold text-yellow-400 rounded-full border-2 border-yellow-300 shadow-2xl transition-colors duration-300 cursor-pointer max-md:w-[90%] dark:hover:border-yellow-500 dark:active:bg-yellow-600 dark:hover:bg-yellow-500 hover:bg-yellow-400 hover:text-white active:bg-yellow-500 dark:shadow-yellow-800 dark:shadow-xl">GitHub</button>
                </div>
            </div>
            <div className="contact-right w-[50%]">
                <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-8 items-center">
                    <div className="flex flex-col gap-2 w-[70%] max-md:w-full nombre">
                        <label htmlFor="name" className="font-semibold">Nombre</label>
                        <input type="text" id="name" name="name" className="w-full px-4 h-[40px] rounded-xl border-black border-2 dark:border-neutral-300"/>
                    </div>
                    <div className="flex flex-col gap-2 email w-[70%] max-md:w-full">
                        <label htmlFor="email" className="font-semibold">Correo</label>
                        <input type="text" id="email" name="email" className="w-full h-[40px] rounded-xl border-black border-2 px-4 dark:border-neutral-300"/>
                    </div>
                    <div className="flex flex-col gap-2 message w-[70%] max-md:w-full">
                        <label htmlFor="message" className="font-semibold">Message</label>
                        <textarea name="message" id="message" className="w-full h-[125px] border-2 border-text rounded-xl resize-none px-2 py-2"></textarea>
                    </div>
                    <div className="flex justify-center items-center w-full submit-button">
                        <button className="w-32 h-12 max-md:w-[90%] font-semibold text-white bg-yellow-400 rounded-full border-white shadow-2xl transition-colors duration-300 cursor-pointer hover:border-2 hover:bg-transparent dark:bg-yellow-500 dark:hover:bg-transparent dark:hover:border-yellow-500 hover:border-yellow-400 hover:text-yellow-400 active:bg-neutral-200 dark:shadow-yellow-800 dark:shadow-xl">Enviar</button>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}

export default Contact