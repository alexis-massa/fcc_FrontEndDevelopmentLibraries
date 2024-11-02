const SOUNDS = [
  { 'Chord_1': 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3' },
  { 'Chord_2': 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3' },
  { 'Chord_3': 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3' },
  { 'Give_us_a_light': 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3' },
  { 'Dry_Ohh': 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3' },
  { 'Bld_H1': 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3' },
  { 'punchy_kick_1': 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3' },
  { 'side_stick_1': 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3' },
  { 'Brk_Snr': 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3' },
  { 'Heater_1': 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' },
  { 'Heater_2': 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3' },
  { 'Heater_3': 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3' },
  { 'Heater_4_1': 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3' },
  { 'Heater_6': 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3' },
  { 'Dsc_Oh': 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3' },
  { 'Kick_n_Hat': 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3' },
  { 'RP4_KICK_1': 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3' },
  { 'Cev_H2': 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3' }
]

$(document).ready(() => {
  assignSrc()

  // Event listener to update audio sources when the switch is changed
  $('#switch').on('change', () => {
    assignSrc()
    $('#display').text('') // Clear display on switch
  })

  // Set up event listeners for each drum pad
  $('.drum-pad').each(function () {
    const audioElem = $(this).find('audio')[0]
    const buttonId = $(this).attr('id')

    // Click event listener
    $(this).find('button').on('click', () => {
      playAudio(audioElem, $(this).data('soundName'))
    })

    // Keydown event listener
    $(document).on('keydown', event => {
      if (event.key.toUpperCase() === buttonId)
        playAudio(audioElem, $(this).data('soundName'))

    })
  })
})

function assignSrc() {
  $('.drum-pad').each(function (index) {
    const switchAudio = $('#switch').is(':checked') ? 8 : 0
    const soundObject = SOUNDS[index + switchAudio]
    const soundName = Object.keys(soundObject)[0]
    const audioSrc = soundObject[soundName]

    // Set the new audio source and update the sound name data attribute
    $(this).find('audio').attr('src', audioSrc)
    $(this).data('soundName', soundName)  // Store soundName as a data attribute
  })
}

function playAudio(audioElem, soundName) {
  if ($('#onoff').is(':checked')) {
    audioElem.play()
    $('#display').text(soundName)  // Display the updated sound name
  }
}
