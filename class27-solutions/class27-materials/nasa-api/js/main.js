document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const date = document.querySelector('input').value.toLowerCase()
  const url = `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        //02.03.2021 === video?? must if
        if(data.media_type === 'image'){
            document.querySelector('img').src = data.url
        }else if(data.media_type === 'video'){
            document.querySelector('iframe').src = data.url
        }
        document.querySelector('h2').innerText = data.date
        document.querySelector('img').src = data.url
        document.querySelector('h3').innerText = data.explanation
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}