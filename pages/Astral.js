import React from 'react';
import csjs from 'react-csjs';
import { Lightbox, Page, Nav, NavLink, Header, CustomHeader, Section, Figure, FigureHalf, Quote, Footer, Grid } from '../components';

const data = [
    { date: '30. Nov', time: '19:00', title: 'Was ist Gnosis', content: 'Einführung in das gnostische Weltbild. Die Strömungen und Traditionen. Gnosis in der Kunst, Philosophie, Wissenschaft und Religion. Drei Faktoren des Bewusstseins.', image: '/assets/kether.jpg', height: 600 },

    { title: 'Persönlichkeit\nEssenz\n& Ego', content: 'Die esoterische Psychologie, der Aufbau unseres Ichs, innere Zustände, Missstände und Möglichkeiten. Praktische Übung: Der Observierende und das Observierte, die Teilung des Bewusstseins.', image: '/assets/bosch.jpg', height: 300 },

    { title: 'Erwachen des\nBewusstseins', content: 'Was ist das Bewusstsein, woher kommt es, welchen Anteil nimmt es an unserem Leben, wie stärkt man es. Praktische Übung: SOL, eine weitere Teilung des Bewusstseins.', image: '/assets/tongues.jpg', height: 300 },

    { title: 'Ego', content: 'Der Mensch ist zu seinem Nachsehen nicht eines. Er ist ist Bund verschiedenster Persönlichkeiten. Praktische Übung: Vertiefung der Übungen.', image: '/assets/pandora.jpg', height: 600 },

    { title: 'Licht\nWärme\n& Ton', content: 'Das Gesetz der 3 (Schöpfung) und das Gesetz der 7 (Ordnung, Harmonie). Chakras und ihr Einfluss auf uns. Praktische Übung: Vokalisation, Mantrams.', image: '/assets/trinity.jpg', height: 600 },

    { title: 'Die Maschine Mensch', content: 'Die esoterische Physiologie. Unsere Fakultäten, Hirne und Mittler. Wie Funktioniert der Mensch aus der esoterischen Betrachtung. Praktische Übung: EInführung in die Selbstbeobachtung.', image: '/assets/sleepwalk.jpg', height: 600 },

    { title: 'Welt der\nRelationen', content: 'Der Mensch und die Relationen die er unterhält zu Gott, zu sich selbst und seiner Umgebung. Praktische Übung: Retrospektion.', image: '/assets/relations.jpg', height: 300, position: 'top' },

    { title: 'Weg und Leben\nNiveau des Wesens', content: 'Das Leben von Moment zu Moment und das Niveau des Bewusstseins. Praktische Übung: Wachsamkeit, Konzentration, falsche innere Zustände.', image: '/assets/Michael_Lukas_Leopold_Willmann_001.jpg', height: 600, position: 'right bottom' },

    { title: 'Dekalog\nGebote Gottes', content: 'Gottes Gebote und deren tiefere, esoterische Bedeutung. Praktische Übung: Praxis der 3 Faktoren.', image: '/assets/moses.jpg', height: 600, position: 'top' },

    { title: 'Fundamentale\nErziehung', content: 'Unsere Berufung und die verschiedenen Stationen in unserem Leben. Praktische Übung: Runen.', image: '/assets/urania.jpg', height: 300 },

    { title: 'Stammmbaum der\nReligionen', content: 'Zusammenhänge und Manifestationen der Weltreligionen. Praktische Übung: Vertiefung in das Thema Runen.', image: '/assets/hands.jpg', height: 300, position: 'left' },

    { title: 'Evolution\nInvolution\n& Revolution', content: 'Die Entwicklung der Menschheit. Essenzen und ihre Reise zur Menschwerdung. Das auf und ab des Rades Samsara', image: '/assets/dante.jpg', height: 600 },

    { title: 'Tod und Geburt', content: 'Die Geburt, die Einfuhr der Seele, das Verlassen des Körpes.', image: '/assets/death.jpg', height: 600, position: 'left' },

    { title: "Reinkarnation\nRückkehr\n& Periodizität", content: 'Der Zyklus von Geburt, Tod und Wiedergeburt.', image: '/assets/angels.jpg', height: 600 },

    { title: 'Karma', content: 'Das Gesetz der Kausalität oder Ursache und Wirkung ist nicht rein mechanisch. Karma erlaubt auch Weiterentwicklung.', image: '/assets/justitia.jpg', height: 600 },

    { title: 'Vier Wege', content: 'Verstand, Demut und Kontrolle über den Körper sind grundlegende Themen in den Religionen. Darüber hinaus der vierte Weg des ausgeglichenen Menschen. Praktische Übung: Konzentration, Asana, Meditation.', image: '/assets/mountains.jpg', height: 300, position: 'top' },

    { title: 'Diagram des\nMenschen', content: 'Die verschiedenen Körper und Dimensionen. Praktische Übung: Astralreisen.', image: '/assets/diagram.jpg', height: 600, position: 'top' },

    { title: 'Transformation\nder Energien', content: 'Einführung in die Alchemie. Der Körper, das Labor des Alchemisten. Metabolismus oder die Fähigkeit des Korpers Masse in Energie zu wandeln und umgedreht. Praktische Übung:  Pranayama.', image: '/assets/well.jpg', height: 300 },

    { title: 'Alchemie', content: 'Das Arkanum AZF, eines der geheimsten Aspekte der Religion. Die Schöpfung der Seele, Geheimnisse der Ehe zwischen Mann und Frau.', image: '/assets/alchemy.jpg', height: 600 },

    { title: 'Elementale', content: 'Geschöpfe in der Natur, Geschichten, Fabeln und Realitäten intelligenter Prinzipen. Praktische Übung: Medizin, Pflanzen, Kontakt mit der Natur.', image: '/assets/elementals.jpg', height: 600, position: "top" },

    { title: 'Initiation', content: 'Die Geschichte der allgemeinen Geheimschule, ihrer Kammern, von Meistern, Schülern und Einweihungen.', image: '/assets/initiation.jpg', height: 600, position: 'top' }
]

@csjs`
.wrapper {
    width: 100%;
    height: 100%;
    & h5, & h6 { white-space: pre-wrap; word-break: break-word; }
    & h6 { line-height: 1.3em; }
    & h5 {
        margin-bottom: 0.6em;
        &::after {
            content: '';
            position: absolute;
            bottom: -0.5em;
            left: calc(50% - 45%);
            width: 90%;
            height: 3px;
            background-color: white;
        }
    }
    & > div.gradient {
        width: 100%;
        height: 100%;
        background: linear-gradient(335deg,rgba(105, 16, 150, 0.1),rgba(126, 132, 165, 0.1));
    }
    & > div.content {
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 10px;
        width: 100%;
        height: 100%;
        background-color: rgba(49,49,49,0.3);
        transition: all .2s;
    }
    & > div.content:hover {
        background-color: rgba(0,0,0,1)!important;
    }
}`
class Image extends React.Component {
    render() {
        let { classes, active } = this.props;
        let { title, height, image, position } = this.props.item;
        let selected = active === this.props.item;
        return (
            <div className={classes.wrapper}>
                <div className={classes.gradient} />
                <div className={classes.content} style={{ backgroundColor: selected ? 'rgba(0,0,0,1)' : 'rgba(49,49,49,0.3)' }}>
                    <h5>5. <span style={{ fontSize: '0.8em'}}>NOV 19:00</span></h5>
                    <h6>{title}</h6>
                </div>
            </div>
        )
    }
}

export default class extends React.Component {
    state = { item: undefined }
    onItemClicked = item => this.setState({ item });
    onLightboxClicked = () => this.setState({ item: undefined });
    render() {
        return (
            <Page>

                <Lightbox item={this.state.item} onClicked={this.onLightboxClicked}/>

                <Header title={"Gnosis\nKultur\nFreiburg"}>
                    Oder, wie der Traum<br/>
                    Kenntnisse von höheren Welten vermittelt
                </Header>

                <Section title="Einleitung" anchor="intro">

                    <p>Als <i>Geheimwissenschaft</i> verstand man den Weg zu höherer Erkenntnis. Man ging davon aus, dass die Anlage diesen zu beschreiten in jedermann potenziell vorhanden war. Im Streben des <i>Geheimschülers</i> vereinten sich Studium, Praxis und Mystik und gaben Veranlassung zur Selbstkenntnis als Grundlage für die spirituelle Erfahrung, die Schritt für Schritt Anklang im Leben fand als wäre ein lange verlorener Teil der eigenen Identität wiederentdeckt worden. Die systematische Schulung der dafür notwendigen Fähigkeiten und Fakultäten übernahmen <i>Mysterienschulen</i> verschiedenster Traditionen und Kulturen. Diese besondere Art der Schule galt immer schon als Fluchtpunkt für jene Menschen die geistige Welten nicht nur überlesen und glauben mochten, sondern den innigsten Drang hatten sie zu begehen.</p>

                    <p>In den kommenden Wochen und Monaten werden im Seminarhaus am Schönberg, Freiburg gnostische Seminare vorgetragen. Jeder der einen ähnlichen Drang in sich verspürt geistige Gegebenheiten innigst kennen zu wollen hat die Möglichkeit einen Eindruck zu gewinnen was es mit der Mysterienschule auf sich hat und welche Konzepte und Praktiken in ihr gelehrt wurden und werden. Die Seminare werden sich mit grundlegenden, spirituellen Themen aus der gnostischen Perspektive befassen. Das Wort <i>Gnosis</i> selbst ist griechischen Ursprungs und bezeichnet ein Wissen, das auf der eigenen Erfahrung beruht und dies soll nach Möglichkeit auch greifbar gemacht werden.</p>

                    <p>Alle Seminare werden gratis sein, wir akzeptieren allerdings gern Spenden für die anfallenden Kosten. Jeder ist herzlich eingeladen.</p>

                </Section>

                <Grid data={data} control={Image} onItemClicked={this.onItemClicked} active={this.state.item}/>

                <Footer day=".30" month="nov" title={"Start der\nSeminare im\nHaus am\nSchönberg,\nFreiburg"}>
                    <p>Kontakt: gnosissur@gmail.com</p>
                    <p>Eintritt kostenlos</p>
                </Footer>

            </Page>
        )
    }
}
