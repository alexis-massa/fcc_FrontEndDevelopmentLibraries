const DEFAULT_TEXT =
  "# Markdown Previewer" +
  "\n\n" +
  "## Here are examples" +
  "\n\n" +
  "[A link: to this code](https://github.com/alexis-massa/fcc_FrontEndDevelopmentLibraries/tree/main/markdown-previewer)" +
  "\n\n" +
  "`Here is some inline code`" +
  "\n\n" +
  "```\nA code block \n```" +
  "\n\n" +
  "- A list item" +
  "\n\n" +
  "> A bloqckquote" +
  "\n\n" +
  "![An image](https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/800px-Cat03.jpg)" +
  "\n\n" +
  "**Bold text**"

$(document).ready(() => {
  $('#editor').val(DEFAULT_TEXT)
  $('#preview').html(marked.parse($('#editor').val()))

  $('#editor').bind('input propertychange', () => {
    let parsedInput = marked.parse($('#editor').val())
    $('#preview').html(parsedInput)
  })
})
