#!/bin/bash

# Import source file from $1
inputFile=$1
outputFile='output.json'
wordCount=0
engCount=0
lineCount=0

function writeLine {
  echo $1 >> $outputFile
  ((lineCount++))
}

# Create output file - deleting if already exists.
# TODO - what bevaviour do we want here long term?
[ -e $outputFile ] && rm $outputFile
touch $outputFile

# Start JSON file
writeLine 'const dictionary = [{'

# read inputFile and write each word to outputFile
while read -r line; do
  # TODO figure out error "[: too many arguments"
  # Maybe ${${line:0:3} = '\lx'}
  if [ ${line:0:3} = '\lx' ]
    then
      if [ $wordCount -gt 0 ]
        then
          writeLine "$word"'"},'
          engCount=0
      fi
      word='"'"${line:4}"'": { "English": "'
      # word="\"${line:4}"\": { \"English\": \""
      ((wordCount++))
  fi
  if [ "${line:0:3}" = '\ge' ]
    then
      if [ $engCount -gt 0 ]
        then # add preceding comma
          word="$word"'; '
      fi
      word="$word${line:4}"
      ((engCount++))
  fi
done < $inputFile
writeLine "$word"'"}'

# End JSON file
writeLine '}]'
writeLine ''
writeLine 'export default dictionary;'