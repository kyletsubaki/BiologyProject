import React, { useState } from 'react';
import './App.css';

type Disease = {
    name: string,
    content?: JSX.Element
};

const diseases: Disease[] = [
    {
        name: 'Monosmy 18p',
        content: <p>

            Dolor eos tempore voluptas dolorem unde ut sunt a. Necessitatibus deserunt animi voluptatibus ut at neque. Id rem aliquam et autem est. Expedita quibusdam non dolorum. Voluptatem qui ullam iste et ratione optio saepe et. Vel sed perferendis in autem amet laudantium.

            Qui eos rerum pariatur quia laborum eius ea. Quis optio consequuntur eos sit distinctio et. Eum amet ipsa amet debitis perferendis velit dolorum perferendis.

            Odit ex est repellat voluptas. At voluptate eligendi voluptas culpa temporibus voluptatem. Sit at mollitia molestiae commodi qui. Illum accusantium et doloribus. Rerum vitae nesciunt hic mollitia consequuntur autem. Nulla qui odit placeat fugit.

            Perspiciatis necessitatibus assumenda dolores. Sit corporis eius nesciunt eius voluptate fugiat. Vero est dolorum non consequatur amet reprehenderit quia sed. Nulla cumque praesentium impedit dolor occaecati suscipit. Sed quis atque voluptate.

            Eius suscipit et reiciendis commodi ut. Repellat enim porro velit. Expedita nihil facilis et suscipit hic nihil. Cumque provident quibusdam omnis vel quo non.
        </p>
    },
    {
        name: 'Trisomy 18'
    },
    {
        name: 'Tetrasomy 18q'
    },
    {
        name: 'Distal 18q Deletion'
    }
];

function App() {
    const [page, setPage] = useState<number | null>(null);

    return (
        <main>
            <header>
                <h1>Chromosome 18</h1>
                <p>Sheraz Fayyaz, Josiah Fu, Kyle Tsubaki, Jacob Wallis,</p>
            </header>
            <section className="center-section">Insert image here</section>
            {diseases.map((e, i) => <DiseaseCard key={i} title={e.name} image="" onClick={() => setPage(i)} />)}
            <div className="overlay-root" style={{ display: page === null ? undefined : 'flex' }}>
                <div className="overlay-background" onClick={() => setPage(null)}></div>
                {diseases.map((e, i) => <DiseasePage key={i} disease={e} shown={page === i} />)}
            </div>
        </main>
    );
}

function DiseaseCard({ title, image, onClick }: { title: string, image: string, onClick: () => void }) {
    return (
        <section className="link" onClick={onClick}>
            <h2>{title}</h2>
            <img src={image} alt={title} />
        </section>
    );
}

function DiseasePage({ disease: { name, content }, shown }: { disease: Disease, shown: boolean }) {
    return (
        <article style={{ display: shown ? 'block' : undefined }}>
            <h2>{name}</h2>
            {content}
        </article>
    );
}

export default App;
