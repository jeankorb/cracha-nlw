//Java Script
//Codigo para teste de funções em JavaScript

const userLinks = {
  github: 'jeankorb',
  facebook: 'jeanfelipekorb',
  youtube: 'channel/UC88RRL42lNReTxQ2dTEvRfg',
  twitter: 'jeankorb',
  instagram: 'jeankorb.oficial',
  linkedin: 'jeankorb'
}

function changeUserLinks() {
  for (let li of bagLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${userLinks[social]}`
  }
}

changeUserLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${userLinks.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userProfile.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
