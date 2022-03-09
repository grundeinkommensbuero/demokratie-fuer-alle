import type { NextPage } from 'next';
import Head from 'next/head';
import { FadeIn } from '../components/animation/FadeIn';
import s from '../styles/Home.module.scss';
import { getIncrementor } from '../utils/getCounter';
import { ResponsiveImage } from '../components/images/ResponsiveImage';
import { getAssetURL } from '../utils/getAssetURL';

const Home: NextPage = () => {
  const getTitleDelay = getIncrementor(0, 0.15);
  const getSection1Delay = getIncrementor(0.15, 0.15);
  const getSection2Delay = getIncrementor(0.3, 0.15);

  return (
    <div className={s.container}>
      <Head>
        <title>Demokratie für Alle</title>
        <meta
          name="description"
          content='Links und Informationen zur Initiative "Demokratie für Alle"'
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={s.main}>
        <section className={s.flexContainer}>
          <div className={s.flexItem}>
            <FadeIn delay={getTitleDelay()}>
              <h1>
                Unterschreibe jetzt für die Volksinitiative „Demokratie für
                Alle!“
              </h1>
            </FadeIn>
          </div>

          <div className={s.flexItem}>
            <div className={s.flexLogoContainer}>
              {/* <div className={s.flexLogoItem}>
                <FadeIn orientation='right' delay={getTitleDelay()}>
                  <ResponsiveImage
                    path={getAssetURL('2b05532b-ff5a-4a42-a4aa-64cad97967eb')}
                    alt='Logo der Expedition Grundeinkommen'
                    link={'https://expedition-grundeinkommen.de'}
                  />
                </FadeIn>
              </div> */}
              <div className={s.flexLogoItem}>
                <FadeIn orientation="right" delay={getTitleDelay()}>
                  <ResponsiveImage
                    path={getAssetURL('6c028171-b13d-4315-9558-7e323b50c2be')}
                    alt="Logo Demokratie für alle"
                    link={'https://demokratie-fuer-alle.de'}
                  />
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        <section>
          <FadeIn delay={getSection1Delay()}>
            <h2>Demokratie für Alle</h2>
          </FadeIn>
          <FadeIn delay={getSection1Delay()}>
            <p>
              Die Demokratie ist das Herz unserer Gesellschaft. Wir wollen, dass
              möglichst viele Menschen daran teilhaben und wählen können. Auch,
              wenn sie unter 18 sind oder keinen deutschen Pass besitzen. Und
              Volksbegehren müssen ebenfalls für alle zugänglich sein - ob beim
              Unterschriftensammeln auf der Straße oder digital im Internet.
            </p>
          </FadeIn>
        </section>

        <section>
          <FadeIn delay={getSection2Delay()}>
            <h2>Unsere Forderungen:</h2>
          </FadeIn>

          <ol>
            <FadeIn orientation="up" delay={getSection2Delay()}>
              <li>
                <b>Wahlalter 16:</b> Sofortige Senkung des aktiven Wahlalters
                von 18 auf 16 Jahre bei den Wahlen zum Abgeordnetenhaus und für
                Volksentscheide
              </li>
            </FadeIn>
            <FadeIn orientation="up" delay={getSection2Delay()}>
              <li>
                <b>Wahlrecht für alle:</b> Bundesratsinitiative für ein
                Wahlrecht für Menschen ohne deutsche Staatsbürgerschaft
              </li>
            </FadeIn>
            <FadeIn orientation="up" delay={getSection2Delay()}>
              <li>
                <b>Digitale Demokratie:</b> Einführung der elektronischen
                Eintragungsmöglichkeit für Volksbegehren als Ergänzung zur
                Straßensammlung
              </li>
            </FadeIn>
          </ol>

          <FadeIn delay={getSection2Delay()}>
            <p>
              Den{' '}
              <a href="http://innn.it/demokratiefueralle" target="_blanc">
                vollständigen Forderungstext
              </a>{' '}
              findest du auf innn.it.
            </p>
          </FadeIn>
        </section>

        <section>
          <FadeIn delay={0.15}>
            <h2>Jetzt unterschreiben</h2>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p>
              Unterschriften für Volksinitiativen müssen handschriftlich auf
              Papier erfolgen. Die Unterschriftenlisten kannst du bei unseren
              Bündnispartnern herunterladen.
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className={s.buttonRow}>
              <button className={s.button}>
                Liste bei der Expedition herunterladen
              </button>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p>
              Bei unserem Bündnispartner innn.it kannst Du die Liste mit
              portofreiem Rückumschlag downloaden oder per Post direkt
              zugeschickt bekommen.
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className={s.buttonRow}>
              <button className={s.button}>
                Liste bei innn.it herunterladen
              </button>
            </div>
          </FadeIn>

          {/* <FadeIn delay={0.15}>
            <p>
              Oder Du schaust auf der Sammellandkarte weiter unten auf dieser
              Seite, wo Du vor Ort unterschreiben kannst.
            </p>
          </FadeIn> */}

          {/* <FadeIn delay={0.15}>
            <p>
              Du willst Deine E-Mail-Adresse nicht angeben? Du kannst die Liste
              hier auch anonym herunterladen. Allerdings können wir Dich dann
              nicht informieren, wenn Deine Unterschriften bei uns eingegangen
              sind!
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className={s.buttonRow}>
              <button className={s.button}>Liste anonym herunterladen</button>
            </div>
          </FadeIn> */}
        </section>

        <section>
          <FadeIn delay={0.15}>
            <h2>Unterschreibe vor Ort</h2>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p>
              Schau auf der Karte, wo in nächster Zeit Sammelaktionen
              stattfinden, und wo Listen ausliegen.
            </p>
          </FadeIn>

          <FadeIn delay={0.15} orientation="up">
            <iframe
              width="100%"
              height="600px"
              src="https://expedition-grundeinkommen.de/iframes/map"
            />
          </FadeIn>
        </section>

        <section>
          <FadeIn delay={0.15}>
            <h2>Plane eine Sammelaktion!</h2>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p>
              Du hast Lust, Dich vor Ort beim Sammeln zu beteiligen? Hier kannst
              Du eine Sammelaktion veröffentlichen, um mehr Sammler*innen zu
              mobilisieren.
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className={s.buttonRow}>
              <button className={s.button}>
                Zum Sammelplaner der Expedition
              </button>
            </div>
          </FadeIn>
        </section>

        <section>
          <FadeIn delay={0.15}>
            <h2>Vernetz Dich mit Deinem Kiezteam</h2>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p>Hast Du noch Fragen? Dann schreibe an / rufe an unter …</p>
          </FadeIn>
        </section>

        <section>
          <FadeIn delay={0.15}>
            <h2>Wer steht hinter „Demokratie für Alle“?</h2>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p>
              Die Volksinitiative „Demokratie für Alle“ wird von einem breiten
              Bündnis aus zivilgesellschaftlichen Initiativen und Organisationen
              getragen. Unterstützt wird die Volksinitiative unter anderem von{' '}
              <a href="https://www.dwenteignen.de/">
                Deutsche Wohnen & Co. enteignen
              </a>
              ,{' '}
              <a href="https://expedition-grundeinkommen.de/">
                Expedition Grundeinkommen
              </a>
              , <a href="https://klimaneustart.berlin/">Klimaneustart Berlin</a>
              ,{' '}
              <a href="https://volksentscheid-berlin-autofrei.de/">
                Berlin autofrei
              </a>
              ,{' '}
              <a href="https://bb.mehr-demokratie.de/">Mehr Demokratie e.V.</a>,{' '}
              <a href="https://www.change.org/p/bundesregierung-nicht-ohne-uns-14-prozent-bundestagswahlrecht-f%C3%BCr-alle-in-deutschland-lebenden-menschen">
                Nicht Ohne uns 14 %
              </a>
              , <a href="https://changeverein.org/">Change.org e.V.</a>/
              <a href="https://innn.it/">innn.it</a> und{' '}
              <a href="https://www.openpetition.de/">openPetition</a>.
            </p>
          </FadeIn>
        </section>

        <section>
          <div className={s.flexLogoContainer}>
            <div className={s.flexLogoItem}>
              <FadeIn delay={0.15} orientation="right">
                <ResponsiveImage
                  path={getAssetURL('2b05532b-ff5a-4a42-a4aa-64cad97967eb')}
                  alt="Logo der Expedition Grundeinkommen"
                  link={'https://expedition-grundeinkommen.de'}
                />
              </FadeIn>
            </div>
            <div className={s.flexLogoItem}>
              <FadeIn delay={0.15} orientation="right">
                <ResponsiveImage
                  path={getAssetURL('6c028171-b13d-4315-9558-7e323b50c2be')}
                  alt="Logo Demokratie für Alle"
                  link={'https://demokratie-fuer-alle.de'}
                />
              </FadeIn>
            </div>
          </div>
        </section>
      </main>

      <footer className={s.footer}>
        <section>
          <FadeIn delay={0.15} orientation="up">
            <h2>Presse:</h2>
          </FadeIn>

          <FadeIn delay={0.15} orientation="up">
            <p>
              <b>Presseanfragen</b> können Sie richten an:
              <br />
              <b>E-Mail:</b>{' '}
              <a href="mailto:presse@demokratiefueralle.de ">
                presse@demokratiefueralle.de
              </a>
              <br />
              <b>Pressetelefon:</b> +49 (30) 959997 22
              <br />
              <b>Pressefotos</b> finden Sie{' '}
              <a
                target="_blank"
                rel="noreferrer"
                href="http://www.flickr.com/photos/changeorg/albums/72177720297226955 "
              >
                hier
              </a>
              <br />
            </p>
          </FadeIn>

          <FadeIn delay={0.15} orientation="up">
            <p>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://expedition-grundeinkommen.de/impressum"
              >
                <b>Impressum</b>
              </a>
            </p>
          </FadeIn>
        </section>
      </footer>
    </div>
  );
};

export default Home;
