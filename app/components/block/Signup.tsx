export default function Signup(): JSX.Element {
    return (
        <>
            <section className="tf-login tf-section">
                <div className="ibthemes-container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="tf-title-heading ct style-1">
                                Sigup To NFTs
                            </h2>
                            <div className="flat-form box-login-social">
                                <div className="box-title-login">
                                    <h5>Login with social</h5>
                                </div>
                                <ul>
                                    <li>
                                        <a className="sc-button style-2 fl-button pri-3">
                                            <i className="icon-fl-google-2" />
                                            <span>Google</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="sc-button style-2 fl-button pri-3">
                                            <i className="icon-fl-facebook" />
                                            <span>Facebook</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="flat-form box-login-email">
                                <div className="box-title-login">
                                    <h5>Or login with email</h5>
                                </div>
                                <div className="form-inner">
                                    <form action="#" id="contactform">
                                        <input
                                            id="name"
                                            name="name"
                                            tabIndex={1}
                                            aria-required="true"
                                            required
                                            type="text"
                                            placeholder="Your Full Name"
                                        />
                                        <input
                                            id="email"
                                            name="email"
                                            tabIndex={2}
                                            aria-required="true"
                                            type="email"
                                            placeholder="Your Email Address"
                                            required
                                        />
                                        <input
                                            id="pass"
                                            name="pass"
                                            tabIndex={3}
                                            aria-required="true"
                                            type="text"
                                            placeholder="Set Your Password"
                                            required
                                        />
                                        <div className="row-form style-1">
                                            <label>
                                                Remember me
                                                <input type="checkbox" />
                                                <span className="btn-checkbox" />
                                            </label>
                                            <a className="forgot-pass">
                                                Forgot Password ?
                                            </a>
                                        </div>
                                        <button className="submit">
                                            Sing Up
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
