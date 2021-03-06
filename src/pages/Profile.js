import React, { Component } from 'react';
import '../App.css';
import main1 from '../img/avatar.png';
import Button from '../components/Button.js';
class Profile extends Component {
    render() {
        return (
            <div>

                <h1 className="gray-txt h3 text-center my-5 bold">Ben Atkins</h1>

                <div className="container">
                <div className="row">
                    <div className="col-2">
                    </div>
                    <div className="col-3">
                        <div>
                            <img className="round-circle" src={main1} alt="photo"/>
                        </div>
                        <div className="mt-3">
                            <input name="Upload photo" class="input-file" type="file"/>
                        </div>
                    </div>
                    <div className="col-4">
                        <input id="Name (Full name)" name="Name (Full name)" type="text" placeholder="First Name" class="form-control input-md"/>
                        <input id="Father" name="Father" type="text" placeholder="Last Name" class="form-control mt-2"/>
                        <input id="Phone number" name="Phone number" type="text" placeholder="Phone number " class="form-control mt-2"/>
                        <input id="Permanent Address" name="Permanent Address" type="text" placeholder="Permanent Address" class="form-control mt-2"/>
                        <input id="Permanent Address" name="Permanent Address" type="number" placeholder="zip-code" class="form-control mt-2"/>
                        <input id="Permanent Address" name="Permanent Address" type="text" placeholder="state"class="form-control mt-2"/>
                        <legend class="text mt-5">PAYMENT METHOD</legend>
                        <input type="tel" class="form-control mt-2" name="cardNumber" placeholder="Valid Card Number" autocomplete="cc-number"requiautofocus/>
                        <input type="tel" class="form-control mt-2" name="cardExpiry" placeholder="MM / YY" autocomplete="cc-exp" required/>
                        <input type="tel" class="form-control mt-2 mb-4" name="cardCVC" placeholder="CVC" autocomplete="cc-csc" required/>
                        <Button class="btn-red" link="" name="Submit" />

                        
                    </div>
                    <div className="col-2">
                    </div>
                </div>
                </div>

{/* <div class = "container-fluid" > */}
    {/* <div class="row">
    <div class="col-xs-3 col-md-4 ">
        <div class="col-sm-4 col-md-4 col-lg-4">
            <div class="col-md-1">
                <div class="col-md-2 hidden-xs">
                    <div class="form-group">
                        <div class="col-md-2">
                            <input id="Upload-photo" name="Upload photo" class="input-file" type="file"/>
                        </div>
                        <label
                            class="col-md-12 control-label text-center"
                            for="Upload photo"
                            accept=".jpg, .jpeg, .png">
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </div> */}
    {/* <div class="col-xs-6 col-md-4 ">
        <div class="col-8 ">
            <legend class="text-center">SIGN UP</legend>
            <form class="form-horizontal">
                <fieldset>
                    <div class="form-group">
                        <div class="col-md-8 p-2">
                            <div class="input-group">
                                <input id="Name (Full name)" name="Name (Full name)" type="text" placeholder="First Name" class="form-control input-md"/>
                            </div>
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="col-md-8 p-2">
                            <div class="input-group">
                                <input id="Father" name="Father" type="text" placeholder="Last Name" class="form-control input-md"/>
                            </div>
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="col-md-8 p-2">
                            <div class="input-group">
                                <div class="input-group-addon"></div>
                                <input id="Phone number" name="Phone number" type="text" placeholder="Phone number " class="form-control input-md"/>
                            </div>
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="col-sm-8 p-2">
                            <input id="Permanent Address" name="Permanent Address" type="text" placeholder="Permanent Address" class="form-control input-md "/>
                        </div>
                    </div>
                    <div className="row">
                        <div class="form-group">
                            <div class="col-sm-6 ">
                                <input id="Permanent Address" name="Permanent Address" type="number" placeholder="zip-code" class="form-control input-md "/>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col-sm-6">
                                <input id="Permanent Address" name="Permanent Address" type="text" placeholder="state"class="form-control input-md "/>
                            </div>
                        </div>
                    </div>
                </fieldset>
            </form>

        </div>
        <div class="col-xs-4 col-md-8">
            <legend class="text">PAYMENT METHOD</legend>
            <form class="form-horizontal">
                <fieldset>

                    <div class="form-group">
                        <div class="col-md-8 p-2">
                            <div class="input-group">
                             <div class="form-group">
                                <label for="cardExpiry">
                                    <span class="hidden-xs"></span>
                                    <span class="visible-xs-inline">CARD NUMBER</span>
                                </label>
                                <input type="tel" class="form-control " name="cardNumber" placeholder="Valid Card Number" autocomplete="cc-number"requiautofocus/>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-md-8">
                            <div class="form-group">
                                <label for="cardExpiry">
                                    <span class="hidden-xs"></span>
                                    <span class="visible-xs-inline">EXPIRE DATE</span>
                                </label>
                                <input type="tel" class="form-control" name="cardExpiry" placeholder="MM / YY" autocomplete="cc-exp" required/>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-md-8">
                          <label for="cardCVC">CV CODE</label>
                            <input type="tel" class="form-control" name="cardCVC" placeholder="CVC" autocomplete="cc-csc" required/>
                        </div>
                    </div>
                     <div className="d-flex flex-row">
                            <Button class="btn-red mr-4" link="" name="Submit" />
                         
                        </div>
                </fieldset>
            </form>
        </div>
    </div>

</div>
<div class = "col-xs-3 col-md-4"/> */}
  
{/* </div> */}
//   </div>
        );
    }
}

export default Profile;
