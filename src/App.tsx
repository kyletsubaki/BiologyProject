import React, { useState } from 'react';
import './App.css';
import { classList } from './Util';

type Disease = {
    name: string,
    image?: string
    content?: JSX.Element
};

const diseases: Disease[] = [
    {
        name: 'Monosomy 18q',
        image: 'monosomy.png',
        content: <p>

            Dolor eos tempore voluptas dolorem unde ut sunt a. Necessitatibus deserunt animi voluptatibus ut at neque. Id rem aliquam et autem est. Expedita quibusdam non dolorum. Voluptatem qui ullam iste et ratione optio saepe et. Vel sed perferendis in autem amet laudantium.

            Qui eos rerum pariatur quia laborum eius ea. Quis optio consequuntur eos sit distinctio et. Eum amet ipsa amet debitis perferendis velit dolorum perferendis.

            Odit ex est repellat voluptas. At voluptate eligendi voluptas culpa temporibus voluptatem. Sit at mollitia molestiae commodi qui. Illum accusantium et doloribus. Rerum vitae nesciunt hic mollitia consequuntur autem. Nulla qui odit placeat fugit.

            Perspiciatis necessitatibus assumenda dolores. Sit corporis eius nesciunt eius voluptate fugiat. Vero est dolorum non consequatur amet reprehenderit quia sed. Nulla cumque praesentium impedit dolor occaecati suscipit. Sed quis atque voluptate.

            Eius suscipit et reiciendis commodi ut. Repellat enim porro velit. Expedita nihil facilis et suscipit hic nihil. Cumque provident quibusdam omnis vel quo non.
        </p>
    },
    {
        name: 'Trisomy 18',
        image: 'trisomy.png'
    },
    {
        name: 'Tetrasomy 18p',
        image: 'tetrasomy.png'
    },
    {
        name: 'Distal 18q Deletion'
    }
];

function App() {
    const [page, setPage] = useState<number | null>(null);

    return (
        <main>
            <div className="grid">
                <header>
                    <h1>Chromosome 18</h1>
                    <p>Sheraz Fayyaz, Josiah Fu, Kyle Tsubaki, Jacob Wallis,</p>
                </header>
                <section className="center-section"><img src="standard.png" className="flex-fit" alt="Regular Chromosome 18p" /></section>
                {diseases.map((e, i) => <DiseaseCard key={i} disease={e} onClick={() => setPage(i)} />)}
            </div>
            <div className={classList('overlay-root', ['shown', page !== null])}>
                <div className="overlay-background" onClick={() => setPage(null)}></div>
                {diseases.map((e, i) => <DiseasePage key={i} disease={e} shown={page === i} />)}
            </div>
        </main>
    );
}

function DiseaseCard({ disease: { name, image }, onClick }: { disease: Disease, onClick: () => void }) {
    return (
        <section className="link" onClick={onClick}>
            <h2>{name}</h2>
            <img src={image} className="flex-fit" alt={name} />
        </section>
    );
}

function DiseasePage({ disease: { name, content }, shown }: { disease: Disease, shown: boolean }) {
    return (
        <article className={classList(['shown', shown])}>
            <h2>{name}</h2>
            {content}
        </article>
    );
}

export default App;
