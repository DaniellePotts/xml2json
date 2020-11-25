# XMl -> JSON Converter

Small script which converts a folder of XML's to a set of JSON files in the provided output folder.

**Requirements**

-	[NodeJS](https://nodejs.org/en/download/)

**How to Run**

First install packages:

```
npm install
```

To run the solution, two arguments are required:

-	input folder
- 	output folder

If the input folder does not exist, the system will exit. If the output folder does not exist, the system will create it.

To run the solution, use:

```
node index.js <inputFolderPath> <outputFolderPath>
```

All JSON's will be exported to the specified output folder.

