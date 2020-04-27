import React from 'react'

export default function About() {

    return (
        <div className="textParagraph ">
            <h1 style={{ textAlign: 'center' }}>Kotu</h1>
            <img src={require('../../media/kotu.PNG')} alt="Kotu osaamispisteet" />
            <div className="lista1">
                <h1>Työelämätahtoinen</h1>
                <ul>
                    <li>Suunnittelemme koulutusten sisällöt yhteistyössä <br></br> työelämänkanssa - oppijoita kuullen.</li>
                    <li>Tarjoamme ratkaisuja työyhteisön osaamisen <br></br> kehittämiseen.</li>
                    <li>Tarvitsemme työpaikkoja työssäoppijoille.</li>
                    <li>Kehitämme yrittäjyyttä uudenlaisissa <br></br> oppimisympäristöissä.</li>
                    <br></br>
                    <li>Tekniikan alojen kehittämisen strategiahanke 2019-2020</li>
                </ul>
            </div>
            <div className="lista2">
                <div className="otsikko">
                    <h1>Yritysyhteistyö Kone- ja <br></br> tuotantotekniikan alalla</h1>
                    <ul>
                        <li>Työvoimatarpeen kartoitus</li>
                        <li>Koulutuksen työelämävastaavuus, <br></br>painopistealueet opetuksessa</li>
                        <li>Kone- ja laitekannan uusiminen</li>
                        <br></br>
                        <li>Työelämässä oppiminen ja näytöt työpaikalla</li>
                        <li>Koulutussopimuksen rinnalle oppisopimus</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}