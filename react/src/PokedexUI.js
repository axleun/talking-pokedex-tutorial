import React from 'react';
import './stylesheets/pokedex.css';

function PokemonUI(props) {
    return (
        <div id="pokedex">
            <div id="left">
                <div id="logo"></div>
                <div id="bg_curve1_left"></div>
                <div id="bg_curve2_left"></div>
                <div id="curve1_left">
                    <div id="buttonGlass">
                        <div id="reflect"> </div>
                    </div>
                    <div id="miniButtonGlass1"></div>
                    <div id="miniButtonGlass2"></div>
                    <div id="miniButtonGlass3"></div>
                </div>
                <div id="curve2_left">
                    <div id="junction">
                        <div id="junction1"></div>
                        <div id="junction2"></div>
                    </div>
                </div>
                <div id="screen">
                    <div id="topPicture">
                        <div id="buttontopPicture1"></div>
                        <div id="buttontopPicture2"></div>
                    </div>
                    <div id="picture">
                        {props.pokeDetails ?
                        ( <img src={props.pokeDetails.sprite} alt={props.pokeDetails.name} height="170" />) : null
                    }
                    </div>
                    <div id="buttonbottomPicture"></div>
                    <div id="speakers">
                        <div className="sp"></div>
                        <div className="sp"></div>
                        <div className="sp"></div>
                        <div className="sp"></div>
                    </div>
                </div>
                <div onClick={props.getPokemonAudio} id="bigbluebutton"></div>
                <div id="barbutton1"></div>
                <div id="barbutton2"></div>
                <div id="cross">
                    <div onClick={props.leftArrowClick} id="leftcross">
                        <div id="leftT"></div>
                    </div>
                    <div id="topcross">
                        <div id="upT"></div>
                    </div>
                    <div onClick={props.rightArrowClick} id="rightcross">
                        <div id="rightT"></div>
                    </div>
                    <div id="midcross">
                        <div id="midCircle"></div>
                    </div>
                    <div id="botcross">
                        <div id="downT"></div>
                    </div>
                </div>
            </div>
            <div id="right">
                <div id="stats">
                    <strong>Name:</strong> {props.pokeDetails ? props.pokeDetails.name : ''}<br />
                    <strong>Height:</strong> {props.pokeDetails ? props.pokeDetails.height : ''}cm<br />
                    <strong>Weight:</strong> {props.pokeDetails ? props.pokeDetails.weight : ''}kg<br /><br />
    <strong>The {props.pokeDetails ? props.pokeDetails.genus : ''}</strong><br />
        {props.pokeDetails ? props.pokeDetails.description : ''}
    </div>
                <div id="blueButtons1">
                    <div className="blueButton"></div>
                    <div className="blueButton"></div>
                    <div className="blueButton"></div>
                    <div className="blueButton"></div>
                    <div className="blueButton"></div>
                </div>
                <div id="blueButtons2">
                    <div className="blueButton"></div>
                    <div className="blueButton"></div>
                    <div className="blueButton"></div>
                    <div className="blueButton"></div>
                    <div className="blueButton"></div>
                </div>
                <div id="miniButtonGlass4"></div>
                <div id="miniButtonGlass5"></div>
                <div id="barbutton3"></div>
                <div id="barbutton4"></div>
                <div id="yellowBox1"></div>
                <div id="yellowBox2"></div>
                <div id="bg_curve1_right"></div>
                <div id="bg_curve2_right"></div>
                <div id="curve1_right"></div>
                <div id="curve2_right"></div>
            </div>
        </div>
    );
}

export default PokemonUI;
