import React from 'react';
import csjs from 'react-csjs';
import { data } from '../store';
import { Lightbox, Page, Header, Section, Footer, Grid, GridItem } from '../components';

export default class extends React.Component {
    state = { item: undefined }
    onItemClicked = item => this.setState({ item });
    render() {
        return (
            <Page>

                <Lightbox item={this.state.item} />

                <Header />

                <Section title="Einleitung" anchor="intro">

                    <p>Als <i>Geheimwissenschaft</i> verstand man den Weg zu höherer Erkenntnis. Man ging davon aus, dass die Anlage diesen zu beschreiten in jedermann potenziell vorhanden war. Im Streben des <i>Geheimschülers</i> vereinten sich Studium, Praxis und Mystik und gaben Veranlassung zur Selbstkenntnis als Grundlage für die spirituelle Erfahrung, die Schritt für Schritt Anklang im Leben fand als wäre ein lange verlorener Teil der eigenen Identität wiederentdeckt worden. Die systematische Schulung der dafür notwendigen Fähigkeiten und Fakultäten übernahmen <i>Mysterienschulen</i> verschiedenster Traditionen und Kulturen. Diese besondere Art der Schule galt immer schon als Fluchtpunkt für jene Menschen, die geistige Welten nicht nur überlesen und glauben mochten, sondern den innigsten Drang hatten, sie zu begehen.</p>

                    <p>In den kommenden Wochen und Monaten werden im Seminarhaus am Schönberg, Freiburg gnostische Seminare vorgetragen. Jeder, der einen ähnlichen Drang in sich verspürt geistige Gegebenheiten innigst kennen zu wollen, hat die Möglichkeit einen Eindruck zu gewinnen, was es mit der Mysterienschule auf sich hat und welche Konzepte und Praktiken in ihr gelehrt wurden und werden. Die Seminare werden sich mit grundlegenden, spirituellen Themen aus der gnostischen Perspektive befassen. Das Wort <i>Gnosis</i> selbst ist griechischen Ursprungs und bezeichnet ein Wissen, das auf der eigenen Erfahrung beruht und dies soll nach Möglichkeit auch greifbar gemacht werden.</p>

                    <p>Alle Seminare werden gratis sein, wir akzeptieren allerdings gern Spenden für die anfallenden Kosten. Jeder ist herzlich eingeladen.</p>

                </Section>

                <Grid data={data} control={GridItem} onItemClicked={this.onItemClicked} />

                <Footer day=".30" month="nov" title={"Start der\nSeminare im\nHaus am\nSchönberg,\nFreiburg"}>
                    <p>Kontakt: gnosissur@gmail.com</p>
                    <p>Eintritt kostenlos</p>
                </Footer>

            </Page>
        )
    }
}
