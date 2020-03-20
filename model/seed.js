const Gossip = require('./gossip')
Gossip.remove({}).then(() =>{
  console.log("all item removed")
});

let gossips = [
    {
        title: ' Supreme Court Reserves Ruling On APC’s Request For Review Of Zamfara Judgment',
        category: 'Politics',
        images : ['https://www.nairaland.com/attachments/11218537_supremecourt_jpeg08d669b50b1593a5242d6b50fef015b9'],
        author: '5e70cf3554f5c3501c0c29eb',
        body: `The Supreme Court on Tuesday reserved its ruling on the All Progressives Congress’ application for the review of its judgment which nullified the party’s victories in the general elections held in 2019 in Zamfara State.
        A five-man panel of the apex court led by the Chief Justice of Nigeria, Justice Tanko Muhammad, said the date of the ruling would be communicated to the parties.`,
        tags: ''
    },
    {
        title: 'Tension In Katsina Community As Hunting Dogs Kill Herders’ Goats',
        category: 'News',
        images : ['https://www.nairaland.com/attachments/11218661_fulani640x359_jpegdf20d71e01264cc9531249640578c2a5'],
        author: '5e70cf3554f5c3501c0c29eb',
        body: `There is tension in Unguwan Fanfon Daji, a rural community in Batsari Council of Katsina State, after hunting dogs owned by indigenes killed 10 goats belonging to Fulani herders.`,
        tags: ''
    },
    {
        title: ' Naira Marley Shows Off His Bikes In New Video',
        category: 'Entertainment',
        images : ['https://www.nairaland.com/attachments/11218661_fulani640x359_jpegdf20d71e01264cc9531249640578c2a5'],
        author: '5e70cf4a54f5c3501c0c29ec',
        body: `Nigeria superstar, Nairamarley was seen in a video stylishly showing off is house and some of is bikes. It is not known if he is trying to motivate is followers, known as marlians or if he is doing it just to catch some fun. Any which way, I must say this young man is having the best time of is life.`,
        tags: 'celebrity',
    },
    {
        title: `Liverpool have the most valuable squad in the transfer market from Europe's top-five leagues, according to research group CIES Football Observatory.`,
        category: 'Sport',
        images : ['https://www.nairaland.com/attachments/11216882_111274386liverpoolindex_jpeg9b449fa20821f9269d8de3a20cf42e9d'],
        author: '5e70cf4a54f5c3501c0c29ec',
        body: `With an aggregated value of 1.4bn euros (£1.27bn), the Reds top the list ahead of fellow Premier League side Manchester City (£1.24bn) in second.
        Chelsea are fifth, while Manchester United and Tottenham are in the top 10.`,
        tags: 'liverpool',
    },
    {
        title: ` FG Suspends Plans To Borrow $22.7 Billion`,
        category: 'Politics',
        images : ['https://www.nairaland.com/attachments/11214996_zainabahmed_jpeg22120dd4c770986fe129faf416f2e393'],
        author: '5e70cf4a54f5c3501c0c29ec',
        body: `The Minister of Finance, Mrs. Zainab Ahmed, Monday, disclosed that the Federal Government has suspended its $22.7 billion external borrowing plans due to current realities in the global economic landscape.`,
        tags: '',
    },
]


Gossip.create(gossips).then(gossip =>{
    console.log(`${gossip.length} gossips have been created`)
}).catch(err =>{
    console.error(err)
})
