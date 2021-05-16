function BinaryTree(strArr) {
  const lookupTable = {}
  let error = false
  const head = {}

  for (let i = 0; i <= strArr.length - 1; i++) {
    console.log('i: ', i)
    console.log('head start: ', head)
    const item = strArr[i]

    if (error) {
      break
    }
    let childrenMatrix = 'left0_right0'

    console.log('lookupTable: ', lookupTable)
    // remove first character
    const itemFirstCharRemoved = item.substring(1)

    // remove last character
    const itemLastCharRemoved = itemFirstCharRemoved.substring(
      0,
      itemFirstCharRemoved.length - 1
    )
    console.log('itemLastCharRemoved: ', itemLastCharRemoved)
    const finalItemArr = itemLastCharRemoved.split(',')
    console.log('finalItemArr: ', finalItemArr)

    //  const child =  finalItemArr[0]
    // const parent =  finalItemArr[1]
    let parent = finalItemArr[1]
    let child = finalItemArr[0]
    console.log('parent: ', parent)
    console.log('child: ', child)

    // if (Object.keys(acc).length === 0) {
    //   console.log('acc is  empty')
    // }
    const parentExistsInlookupTable = parent in lookupTable ? true : false
    const childExistsInlookupTable = child in lookupTable ? true : false
    console.log('parentExistsInlookupTable: ', parentExistsInlookupTable)
    console.log('childExistsInlookupTable: ', childExistsInlookupTable)

    for (j = 0; j <= finalItemArr.length - 1; j++) {
      console.log('j: ', j)
      console.log('finalItemArr[j]: ', finalItemArr[j])
      if (error) {
        break
      }
      // process the child
      if (j === 0) {
        // step Child 1. process the child of the current item
        let newItemAsChild = {}

        if (!childExistsInlookupTable) {
          newItemAsChild = { parent, childLeft: '', childRight: '' }
          lookupTable[child] = newItemAsChild
          continue
        }

        // the property already exists in the lookupTable
        if (childExistsInlookupTable) {
          const childInlookupTable = lookupTable[child]

          // check the parent value
          if (!childInlookupTable.parent) {
            lookupTable[child].parent = parent
            console.log('deleting an item from the head object...')
            console.log('head: ', head)
            delete head[child]
          } else {
            if (childInlookupTable.parent !== parent) {
              error = true
              continue
            }
          }
        }
      }

      // process the parent
      if (j === 1) {
        let newItemAsParent = {}
        // step Parent 1: process the parent of the current item
        if (!parentExistsInlookupTable) {
          newItemAsParent = { parent: '', childLeft: child, childRight: '' }
          lookupTable[parent] = newItemAsParent
          head[parent] = 'top'
          continue
        }

        if (parentExistsInlookupTable) {
          const parentInlookupTable = lookupTable[parent]
          // check the children
          if (
            !parentInlookupTable.childLeft &&
            !parentInlookupTable.childRight
          ) {
            childrenMatrix = 'left0_right0'
            lookupTable[parent].childLeft = child
            continue
          }
          if (
            parentInlookupTable.childLeft &&
            !parentInlookupTable.childRight
          ) {
            childrenMatrix = 'left1_right0'
            lookupTable[parent].childRight = child
            continue
          }
          if (parentInlookupTable.childLeft && parentInlookupTable.childRight) {
            childrenMatrix = 'left1_right1'

            if (
              parentInlookupTable.childLeft !== child ||
              parentInlookupTable.childRight !== child
            ) {
              error = true
              continue
            }
          }
        }
        // parent does not exist
        else {
        }
      }

      console.log('childrenMatrix: ', childrenMatrix)
    }
  }
  if (error) {
    return 0
  }
  console.log('head: ', head)
  if (Object.keys(head).length > 1) {
    return 0
  }
  console.log('lookupTable: ', lookupTable)

  return lookupTable
}
const result = BinaryTree(['(1,2)', '(2,4)', '(5,7)', '(7,2)', '(9,5)'])
// const result = BinaryTree(['(1,2)', '(2,4)', '(5,7)', '(7,2)', '(9,5)'])

console.log('result: ', result)
