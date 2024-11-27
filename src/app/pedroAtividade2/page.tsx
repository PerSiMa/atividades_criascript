
export default function Pedro() {
  return (
    <div style={{ overflow: 'hidden' }}>

      <h1 style={{ display: 'flex', width: '100vw', justifyContent: 'center' }}>Pedro página exercício display flex</h1>

      <div style={{ width: '100vw', height: '720px', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>

        <div style={{ width: '830px', gridGap: '10px', display: 'grid', gridTemplateColumns: 'repeat(4, 200px)', gridTemplateRows: '45px repeat(3, 200px)', justifyContent: 'center' }}>
          <div style={{ gridArea: '1 / 1 / 2 / 5', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue', fontSize: '32px', fontWeight: 'bold', height: '45px' }}>Grid comum</div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'red', fontSize: '32px', fontWeight: 'bold' }}>1</div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'red', fontSize: '32px', fontWeight: 'bold' }}>2</div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'red', fontSize: '32px', fontWeight: 'bold' }}>3</div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'red', fontSize: '32px', fontWeight: 'bold' }}>4</div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'red', fontSize: '32px', fontWeight: 'bold' }}>5</div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'red', fontSize: '32px', fontWeight: 'bold' }}>6</div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'red', fontSize: '32px', fontWeight: 'bold' }}>7</div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'red', fontSize: '32px', fontWeight: 'bold' }}>8</div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'red', fontSize: '32px', fontWeight: 'bold' }}>9</div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'red', fontSize: '32px', fontWeight: 'bold' }}>10</div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'red', fontSize: '32px', fontWeight: 'bold' }}>11</div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'red', fontSize: '32px', fontWeight: 'bold' }}>12</div>
        </div>

        <div style={{ width: '830px', gridGap: '10px', display: 'grid', gridTemplateColumns: 'repeat(4, 200px)', gridTemplateRows: '45px repeat(3, 200px)', justifyContent: 'center' }}>
          <div style={{ gridArea: '1 / 1 / 2 / 5', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue', fontSize: '32px', fontWeight: 'bold', height: '45px' }}>Grid com o item 1 com área 2x2</div>
          <div style={{ gridArea: '2 / 1 / 4 / 3', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'red', fontSize: '32px', fontWeight: 'bold' }}>1</div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'red', fontSize: '32px', fontWeight: 'bold' }}>2</div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'red', fontSize: '32px', fontWeight: 'bold' }}>3</div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'red', fontSize: '32px', fontWeight: 'bold' }}>4</div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'red', fontSize: '32px', fontWeight: 'bold' }}>5</div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'red', fontSize: '32px', fontWeight: 'bold' }}>6</div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'red', fontSize: '32px', fontWeight: 'bold' }}>7</div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'red', fontSize: '32px', fontWeight: 'bold' }}>8</div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'red', fontSize: '32px', fontWeight: 'bold' }}>9</div>
        </div>

      </div>

      <div style={{ width: '100vw', height: '720px', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>

        <div style={{ width: '830px', gridGap: '10px', display: 'grid', gridTemplateColumns: 'repeat(4, 200px)', gridTemplateRows: '45px repeat(3, 200px)', justifyContent: 'center' }}>
          <div style={{ gridArea: '1 / 1 / 2 / 5', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue', fontSize: '32px', fontWeight: 'bold', height: '45px' }}>Grid com 2 itens de área 1x4</div>
          <div style={{ gridArea: '2 / 1 / 3 / 5', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'red', fontSize: '32px', fontWeight: 'bold' }}>1</div>
          <div style={{ gridArea: '3 / 1 / 4 / 5', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'red', fontSize: '32px', fontWeight: 'bold' }}>2</div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'red', fontSize: '32px', fontWeight: 'bold' }}>3</div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'red', fontSize: '32px', fontWeight: 'bold' }}>4</div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'red', fontSize: '32px', fontWeight: 'bold' }}>5</div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'red', fontSize: '32px', fontWeight: 'bold' }}>6</div>
        </div>

        <div style={{ width: '830px', gridGap: '10px', display: 'grid', gridTemplateColumns: 'repeat(4, 200px)', gridTemplateRows: '45px repeat(3, 200px)', justifyContent: 'center' }}>
          <div style={{ gridArea: '1 / 1 / 2 / 5', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue', fontSize: '32px', fontWeight: 'bold', height: '45px' }}>Grid com 2 itens de área 1x4 + 1 item de área 2x2</div>
          <div style={{ gridArea: '2 / 1 / 3 / 5', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'red', fontSize: '32px', fontWeight: 'bold' }}>1</div>
          <div style={{ gridArea: '3 / 1 / 4 / 3', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'red', fontSize: '32px', fontWeight: 'bold' }}>2</div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'red', fontSize: '32px', fontWeight: 'bold' }}>3</div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'red', fontSize: '32px', fontWeight: 'bold' }}>4</div>
          <div style={{ gridArea: '3 / 3 / 5 / 5', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'red', fontSize: '32px', fontWeight: 'bold' }}>5</div>
        </div>

      </div>

      <div style={{ width: '100vw', height: '720px', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>


        <div style={{ width: '830px', gridGap: '10px', display: 'grid', gridTemplateColumns: 'repeat(4, 200px)', gridTemplateRows: '45px repeat(3, 200px)', justifyContent: 'center' }}>
          <div style={{ gridArea: '1 / 1 / 2 / 5', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue', fontSize: '32px', fontWeight: 'bold', height: '45px' }}>Exemplo 1 com conceitos aplicados</div>
          <div style={{ gridArea: '2 / 1 / 3 / 5', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'red', fontSize: '32px', fontWeight: 'bold' }}>
            <img loading="lazy" src="https://picsum.photos/830/200" alt="Describe image here" width="830px" height="200px" />
          </div>

          <div style={{ gridArea: '3 / 1 / 4 / 3', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'center', fontSize: '35px', width: '100%', paddingBottom: '4px', marginBottom: '10px', borderBottom: '3px solid white' }}>Título</div>
            <div style={{ fontSize: '15px' }}>Lorem ipsum odor amet, consectetuer adipiscing elit. Ornare rutrum euismod integer himenaeos amet pharetra leo. Tempor pellentesque ante finibus laoreet; mauris maecenas curabitur diam quis. Hac bibendum pellentesque mi eros urna dis. Fermentum ut ornare ut vitae dignissim curabitur, malesuada leo turpis. Curabitur tempus convallis nisl vivamus sit himenaeos adipiscing cubilia elit. Nulla maximus rhoncus, lobortis etiam ex sollicitudin justo.</div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '15px' }}>Lorem ipsum odor amet, consectetuer adipiscing elit. Aenean nunc feugiat platea sodales nunc montes phasellus inceptos elementum. Lorem ipsum odor amet, consectetuer adipiscing elit. Aenean nunc feugiat.</div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '15px' }}>Lorem ipsum odor amet, consectetuer adipiscing elit. Aenean nunc feugiat platea sodales nunc montes phasellus inceptos elementum. Lorem ipsum odor amet, consectetuer adipiscing elit. Aenean nunc feugiat.</div>
          <div style={{ gridArea: '3 / 3 / 5 / 5', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold', flexDirection: 'column' }}>
            <img loading="lazy" src="https://picsum.photos/385" alt="Describe image here" width="410px" height="385px" />
            <div style={{ color: 'DarkGrey', width: '100%', display: 'flex', justifyContent: 'flex-start', fontSize: '12px', marginTop: '7px', paddingTop: '2px', borderTop: '1px solid DarkGrey' }}>lorem ipsum imagem texto exemplo</div>
          </div>
        </div>

        <div style={{ width: '830px', display: 'grid', gridRowGap: '10px', gridTemplateRows: '45px 620px', justifyContent: 'center' }}>
          <div style={{ gridArea: '1 / 1 / 2 / 3', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue', fontSize: '32px', fontWeight: 'bold' }}>Exemplo 2 com conceitos aplicados</div>
          <div style={{ width: '830px', display: 'grid', gridTemplateColumns: 'repeat(8, 103.75px)', gridTemplateRows: 'repeat(8, 77.5px)', justifyContent: 'center' }}>
            <div style={{ gridArea: '3 / 3 / 7 / 7', zIndex: '1', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue', boxShadow: '0px 12px 18px 16px rgba(0 , 0 , 0 , 0.8)' }}>
              <img loading="lazy" src="https://picsum.photos/415/310" alt="Describe image here" width="415px" height="310px" />
            </div>
            <div style={{ width: '620px', gridGap: '10px', display: 'grid', gridTemplateColumns: 'repeat(2, 410px)', gridTemplateRows: 'repeat(2, 305px)' }}>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'red', fontWeight: 'bold' }}>
                <img loading="lazy" src="https://picsum.photos/410/305" alt="Describe image here" width="410px" height="305px" />
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'red', fontWeight: 'bold' }}>
                <img loading="lazy" src="https://picsum.photos/410/305" alt="Describe image here" width="410px" height="305px" />
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'red', fontWeight: 'bold' }}>
                <img loading="lazy" src="https://picsum.photos/410/305" alt="Describe image here" width="410px" height="305px" />
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'red', fontWeight: 'bold' }}>
                <img loading="lazy" src="https://picsum.photos/410/305" alt="Describe image here" width="410px" height="305px" />
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}