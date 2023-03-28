import React, { useEffect, useState } from 'react';
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
            <h3>Patient Article</h3>
                <p>
                    Sarah Osborn was born with a rare genetic disorder called Monosomy 18p. This condition results from a 
                    deletion of genetic material on the short arm of chromosome 18. As a result, Sarah has had numerous 
                    health issues and developmental delays throughout her life. Growing up, Sarah struggled with speech and 
                    language development, and she had difficulty communicating with others. She also had fine motor skills 
                    issues and required physical therapy to help her learn how to use her hands and fingers to perform daily 
                    activities like writing and using utensils. However, Sarah was a happy and resilient child; she loved spending 
                    time with her family, especially her older sister, who was always there to support and encourage her. Sarah's 
                    parents were dedicated to providing her with the best possible care and support, and they worked closely with 
                    her healthcare team to develop a comprehensive treatment plan that addressed her unique needs. As she got older, 
                    her health issues continued to affect her life. She experienced seizures and required medication to manage them. 
                    She also struggled with anxiety and behavioral issues, which made it difficult for her to socialize with 
                    others and form close relationships. Despite these challenges, Sarah remained determined to live her life to the 
                    fullest. She was passionate about music and loved to sing and play the piano. She also had a talent for art and 
                    enjoyed creating beautiful paintings and drawings. 
                </p>
                <p>
                    Over the years, Sarah's doctors recommended a variety of 
                    treatments and interventions to help manage her symptoms and improve her quality of life. She received 
                    speech and occupational therapy, which helped her develop better communication and fine motor skills. 
                    She also received special education services, which provided academic and social support and helped her 
                    reach her full potential in school. In addition, Sarah's healthcare team recommended medications to manage 
                    her seizures and behavioral issues, which helped to improve her overall health and well-being. She underwent 
                    surgery to correct a heart defect, which greatly improved her cardiac function and quality of life.
                </p>
                <p>
                    Despite these treatments and interventions, Sarah continued to face significant challenges related to her 
                    Monosomy 18p. She struggled with depression and anxiety, and she often felt isolated and alone. She had 
                    difficulty making friends and maintaining relationships, which made it hard for her to feel connected to others. 
                    Sarah continued to pursue her passions in music and art, and she even started performing at local events and 
                    showcasing her artwork at local galleries. She also became involved in a support group for individuals with 
                    Monosomy 18p, which provided her with a sense of community and belonging. Through it all, Sarah's family remained 
                    her biggest source of support and encouragement. They continued to advocate for her and provide her with the 
                    care and support she needed to thrive. While Sarah continued to face significant challenges related to her 
                    Monosomy 18p, she remained resilient and determined to live her life on her own terms.
            </p>
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
            <h3>Patient Article</h3>
            <p>
                Finding Light in Sorrow: John Jones' Journey with Trisomy 18 "Every day is a new chance to learn, grow, 
                and make a difference." John Jones Meet John Jones, a 28-year-old graphic designer from the Midwest who spends 
                his spare time playing guitar, reading books on philosophy, hiking in the nearby mountains, and volunteering at a 
                local animal shelter. What sets John apart from most people his age is his diagnosis of a mosaic, mild variant of 
                trisomy 18, also known as Edward's syndrome. This uncommon genetic disorder affects physical and intellectual 
                development, frequently resulting in a shortened life expectancy. However, John's unwavering optimism and determination 
                have allowed him to lead a fulfilling life. 
            </p>
            <p>
                Trisomy 18 occurs when an individual has an additional copy of chromosome 18, leading to a range of symptoms 
                that can vary greatly in severity. In John's case, his diagnosis came after his parents noticed delays in his 
                physical growth and some distinctive physical features. A geneticist conducted a karyotype test, which confirmed 
                the presence of an extra chromosome 18. From infancy, John faced challenges with eating, gaining weight, and 
                meeting developmental milestones. Despite these obstacles, his family and healthcare team rallied around him to 
                offer comprehensive aid and support. They developed a program that included regular medical check-ups, physical 
                therapy, speech therapy, and occupational therapy to help John achieve his full potential. John's journey has 
                been one of slow but steady progress. With the help of his therapists and supportive devices like leg braces, 
                he has learned to sit up, crawl, and walk. He has also developed some language skills, enabling him to convey 
                his basic needs and wants to his family and caregivers. 
            </p>
            <p>
                This progress has brought happiness and engagement to 
                John's life, and he has become an active participant in activities tailored to his needs and abilities. 
                Throughout his experience, John's family and friends have played a crucial part in his support system. 
                They have shared in his struggles and triumphs, offering encouragement and love. John's elder sister, for example, 
                has been a constant companion, bonding over their shared love of Netflix and the recent episodes of The Mandalorian. 
                John has undergone several treatments and therapies, with generally positive outcomes. 
            </p>
            <p>
                Currently, he is living at home with his parents and older sister, continuing to work as a graphic designer, and enjoying his hobbies. 
                Though he still faces ongoing health challenges related to trisomy 18, John remains generally healthy and stable. 
                John's story is a shining example of resilience and the power of a positive attitude. Through unwavering 
                determination and the support of his family, friends, and healthcare team, he has built a life filled with love, 
                joy, and purpose. As John continues his journey, his optimism and zest for life serve as an inspiration to all who 
                love him, proving that even in the face of adversity, there is always light to be found.
            </p>
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
            <h3>Patient Article</h3>
                <p>
                    Summer Elizabeth Tsai is a 16-year-old girl who lives with her parents and younger sister in El Segundo, 
                    California. Her family has no known history of genetic disorders, but her maternal grandfather had a history of heart 
                    disease, and her paternal grandmother was diagnosed with breast cancer. Summer is a bright and enthusiastic girl who 
                    loves to vlog, ski, snowboard, and play video games. However, she began experiencing difficulty in school, particularly 
                    with her memory and cognitive abilities. The first symptoms that Summer experienced were developmental delays, including delayed speech and motor skills. 
                    As she got older, she started experiencing learning difficulties, as well as muscle weakness and stiffness. Later on, she also began to 
                    have seizures and problems with her heart and lungs.
                </p>
                <p>
                    Summer and her family went to see a variety of specialists over the years as her symptoms continued to progress. 
                    They saw pediatricians, neurologists, and geneticists, among others, and underwent tests and evaluations. 
                    It was a long and frustrating process, but it wasn't until Summer was 14 years old that she was finally diagnosed with 
                    Tetrasomy 18p. The diagnosis came as a relief to Summer and her family, who had been struggling to understand what was 
                    causing her symptoms for many years. Tetrasomy 18p is a rare genetic disorder caused by an extra copy of a section of 
                    chromosome 18 in the cells. The condition can cause a wide range of symptoms, including developmental delays, intellectual 
                    disability, muscle weakness, seizures, and heart and lung problems.
                </p>
                <p>
                    After the diagnosis, Summer and her family were able to seek out more targeted care and support for her condition. 
                    Summer received a combination of treatments and care for Tetrasomy 18p, including physical therapy to help with muscle 
                    weakness and coordination issues, occupational therapy to assist with daily living activities, speech therapy to address 
                    speech and language delays, and special education services to support her learning needs. Additionally, genetic counseling 
                    helped her and her family understand the condition and its inheritance. The results of Summer's treatment and care have been 
                    positive. While her condition cannot be cured, she has shown improvement in her motor skills, communication abilities, and 
                    academic performance. She has also been able to participate in her favorite hobbies with adaptations and accommodations.
                </p>
                <p>
                    Summer's story is one of perseverance and hope. Despite facing significant challenges due to her condition, she remains 
                    optimistic about her future. She has a supportive family and medical team, and she is determined to live life to the 
                    fullest and pursue her passions. Summer's experience highlights the importance of early detection and intervention for 
                    genetic disorders. With the right care and support, individuals with Tetrasomy 18p can lead fulfilling lives and achieve 
                    their goals.
            </p>
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
        image: 'transcription_thumbnail.png',
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

    useEffect(() => {
        if (page !== null) {
            const handleKeyUp = (event: KeyboardEvent) => {
                if (event.key === "Escape" && page !== null) {
                    setPage(null);
                }
            }
            window.addEventListener('keyup', handleKeyUp);
            return () => window.removeEventListener('keyup', handleKeyUp);
        }
    }, [page])

    return (
        <main>
            <header>
                <h1>Chromosome 18</h1>
                <p className="subtitle">Sheraz Fayyaz, Josiah Fu, Kyle Tsubaki, Jacob Wallis</p>
            </header>
            <div className="grid">
                <div className="grid-item center-section"><img src="standard.png" className="flex-fit" alt="Regular Chromosome 18p" /></div>
                {pages.map((e, i) => <PageCard key={i} disease={e} onClick={() => setPage(i)} positionClass={['top-left-section', 'bottom-left-section', 'top-right-section', 'bottom-right-section', 'top-center-section'][i]} noTitle={i === 4} />)}
            </div>
            <Overlay onBackgroundClick={() => setPage(null)} shown={page !== null}>
                {pages.map((e, i) => <PagePopup key={i} disease={e} shown={page === i} />)}
            </Overlay>
        </main>
    );
}

function Overlay({ onBackgroundClick, shown, children }: { onBackgroundClick: React.MouseEventHandler, shown: boolean, children: JSX.Element[] }) {
    const [displayed, setDisplayed] = useState(false);
    const [animated, setAnimated] = useState(false);

    useEffect(() => {
        if (displayed) {
            setAnimated(true);
        }
    }, [displayed]);

    useEffect(() => {
        if (shown) {
            setDisplayed(true);
        } else {
            setAnimated(false);
        }
    }, [shown]);

    const handleTransitionEnd = () => {
        if (!shown) {
            setDisplayed(false);
        }
    };

    return (
        <div className={classList('overlay-root', ['display', displayed], ['shown', animated])} onTransitionEnd={handleTransitionEnd}>
            <div className="overlay-background" onClick={onBackgroundClick}></div>
            {children}
        </div>
    );
}

function PageCard({ disease: { name, image }, onClick, positionClass, noTitle = false }: { disease: PageData, onClick: () => void, positionClass: string, noTitle?: boolean }) {
    return (
        <button className={'grid-item link ' + positionClass} onClick={onClick}>
            {noTitle || <p className="card-title">{name}</p>}
            <img src={image} className="flex-fit" alt={name} />
        </button>
    );
}

function PagePopup({ disease: { name, content }, shown }: { disease: PageData, shown: boolean }) {
    const [displayed, setDisplayed] = useState(false);
    const [animated, setAnimated] = useState(false);

    useEffect(() => {
        if (displayed) {
            setTimeout(() => setAnimated(true), 10);
        }
    }, [displayed]);

    useEffect(() => {
        if (shown) {
            setDisplayed(true);
        } else {
            setAnimated(false);
        }
    }, [shown]);

    const handleTransitionEnd = () => {
        if (!shown) {
            setDisplayed(false);
        }
    };

    return (
        <article className={classList(['shown', animated], ['display', displayed])} onTransitionEnd={handleTransitionEnd}>
            <h2>{name}</h2>
            {content}
        </article>
    );
}

export default App;
