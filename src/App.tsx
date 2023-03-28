import React, { useState } from 'react';
import './App.css';
import { classList } from './Util';

type PageData = {
    name: string,
    image: string
    content: JSX.Element
};

const pages: PageData[] = [
    {
        name: 'Monosomy 18q',
        image: 'monosomy.png',
        content: (<>
            <img className="full-width" src="monosomy_karyotype.png" alt="Monosomy 18q Karyotype" />
            <p>
                Monosomy 18p is a genetic condition that affects between 1:50,000 and 1:200,000 people.
                It is caused by the deletion of the short "arm" of the 18th chromosome during fetal
                development and can be detected prenatally through ultrasound. Women are more likely to
                be affected than men. While not everyone with Monosomy 18p exhibits symptoms in
                childhood, some may experience delays in developmental milestones and unfinished growth.
                Treatment is mainly aimed at improving quality of life through therapy, specialized
                education, medication, and surgery in extreme cases. The exact function of the condition
                on specific cells is not fully understood, but it mainly alters gene expression from the
                remaining chromosome. Monosomy 18p is not preventable and is entirely dependent on
                genetics. It is not typically fatal except in extreme cases when it is paired with
                another genetic condition.
            </p>
            <img className="image-small" src="monosomy_effect.png" alt="A missing chromosomes means missing proteins" />
        </>)
    },
    {
        name: 'Trisomy 18',
        image: 'trisomy.png',
        content: (<>
            <img className="full-width" src="trisomy_karyotype.png" alt="Trisomy 18 Karyotype" />
            <p>
                Trisomy 18, also known as Edwards syndrome, is a genetic disorder caused by an extra
                copy of chromosome 18, resulting in 47 chromosomes instead of the typical 46. This
                extra chromosome affects various cellular functions, including the central dogma,
                transcription, translation, and mitosis, resulting in developmental and intellectual
                disabilities. Trisomy 18 patients have abnormal RNA due to the extra chromosome,
                causing non-standard proteins to be produced. The extra chromosome also disrupts the
                cell cycle, resulting in chromosomal segregation mistakes and aberrant cell
                division. Although not a cancer, understanding the difference between healthy and
                cancerous mitosis is important in treating Trisomy 18 patients. Prospective
                treatment approaches should consider the molecular basis of the disorder and its
                effect on cellular functions to improve patients' lives.
            </p>
            <img className="image-small" src="trisomy_effect.png" alt="An extra chromosomes means extra proteins" />
        </>)
    },
    {
        name: 'Tetrasomy 18p',
        image: 'tetrasomy.png',
        content: (<>
            <img className="full-width" src="tetrasomy_karyotype.png" alt="Tetrasomy 18p Karyotype" />
            <p>
                Tetrasomy 18p is a rare hereditary disorder that can affect various parts of the
                body, including the facial features, skeletal system, and internal organs. Both
                males and females can be affected, and it is typically sporadic, although it can be
                inherited from a parent who carries a chromosomal abnormality. The symptoms of
                Tetrasomy 18p can range from mild to severe and may include developmental delays,
                intellectual disability, seizures, vision and hearing problems, skeletal
                abnormalities, and kidney and urinary tract abnormalities. Treatment options are
                mostly focused on managing the symptoms and complications of the condition. There is
                no known way to prevent Tetrasomy 18p, but early detection can allow for early
                intervention and management of symptoms. Further research is needed to better
                understand the mechanisms of the condition and to develop better strategies for
                management and treatment.
            </p>
            <img className="image-small" src="tetrasomy_effect.png" alt="Two extra chromosomes means extra proteins" />
        </>)
    },
    {
        name: 'Distal 18q Deletion',
        image: 'deletion.png',
        content: (<>
            <img className="full-width" src="deletion_karyotype.png" alt="Distal 18q Deletion Karyotype" />
            <p>
                Distal 18q deletion syndrome is a genetic condition caused by a deletion in the q
                arm 18, occurring in 1 in ~55,000 newborns, with most being distal 18q deletion. It
                can be inherited but mostly occurs sporadically, with symptoms present from birth,
                including weakened muscles, an underactive thyroid gland, movement disorders and
                other eye problems, congenital heart defects, kidney problems, genital
                abnormalities, reduced myelin sheath in the nervous system, growth delays, short
                stature, seizures, mental deficiency, behavioral problems, skull malformations, and
                abnormalities of hands, feet, ribs, and hips. Treatment can include a coordinated
                effort from a team of medical professionals, surgery to correct malformations,
                medication, and early intervention. The condition can be detected before birth
                through amniocentesis and ultrasonography.
            </p>
            <img className="image-small" src="deletion_effect.png" alt="Missing genes means missing proteins" />
        </>)
    },
    {
        name: 'Central Dogma',
        image: 'transcription.png',
        content: (<>
            <p className="subtitle">Transcription</p>
            <img className="full-width" src="transcription.png" alt="Transcription" />
            <p className="subtitle">Translation</p>
            <img className="full-width" src="translation.png" alt="Translation" />
        </>)
    }
];

function App() {
    const [page, setPage] = useState<number | null>(null);

    return (
        <main>
            <div className="grid">
                <header>
                    <h1>Chromosome 18</h1>
                    <p className="subtitle">Sheraz Fayyaz, Josiah Fu, Kyle Tsubaki, Jacob Wallis</p>
                </header>
                <section className="center-section"><img src="standard.png" className="flex-fit" alt="Regular Chromosome 18p" /></section>
                {pages.map((e, i) => <PageCard key={i} disease={e} onClick={() => setPage(i)} positionClass={['top-left-section', 'bottom-left-section', 'top-right-section', 'bottom-right-section', 'top-center-section'][i]} noTitle={i === 4} />)}
            </div>
            <div className={classList('overlay-root', ['shown', page !== null])}>
                <div className="overlay-background" onClick={() => setPage(null)}></div>
                {pages.map((e, i) => <PagePopup key={i} disease={e} shown={page === i} />)}
            </div>
        </main>
    );
}

function PageCard({ disease: { name, image }, onClick, positionClass, noTitle = false }: { disease: PageData, onClick: () => void, positionClass: string, noTitle?: boolean }) {
    return (
        <section className={'link ' + positionClass} onClick={onClick}>
            {noTitle || <h2>{name}</h2>}
            <img src={image} className="flex-fit" alt={name} />
        </section>
    );
}

function PagePopup({ disease: { name, content }, shown }: { disease: PageData, shown: boolean }) {
    return (
        <article className={classList(['shown', shown])}>
            <h2>{name}</h2>
            {content}
        </article>
    );
}

export default App;
