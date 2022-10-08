import { BoxGeometry } from 'three'

// This geometry is shared across all volume meshes.
const omnicube = new BoxGeometry(1, 1, 1)

// Add three morphs to each vertex
const vertices = omnicube.attributes.position

var p = [
  vertices.clone(), vertices.clone(), vertices.clone(), // x/y/x of vertex 1
  vertices.clone(), vertices.clone(), vertices.clone(),
  vertices.clone(), vertices.clone(), vertices.clone(),
  vertices.clone(), vertices.clone(), vertices.clone(),
  vertices.clone(), vertices.clone(), vertices.clone(),
  vertices.clone(), vertices.clone(), vertices.clone(),
  vertices.clone(), vertices.clone(), vertices.clone(),
  vertices.clone(), vertices.clone(), vertices.clone() // x/y/z of vertex 8
]

const morphMap = {
  '+++:X': 0,
  '+++:Y': 1,
  '+++:Z': 2,
  '++-:X': 3,
  '++-:Y': 4,
  '++-:Z': 5,
  '+-+:X': 6,
  '+-+:Y': 7,
  '+-+:Z': 8,
  '+--:X': 9,
  '+--:Y': 10,
  '+--:Z': 11,
  '-+-:X': 12,
  '-+-:Y': 13,
  '-+-:Z': 14,
  '-++:X': 15,
  '-++:Y': 16,
  '-++:Z': 17,
  '---:X': 18,
  '---:Y': 19,
  '---:Z': 20,
  '--+:X': 21,
  '--+:Y': 22,
  '--+:Z': 23
}

// Z+ Y+ X+
p[0].setX(0, 100)
p[0].setX(11, 100)
p[0].setX(17, 100)
p[1].setY(0, 100)
p[1].setY(11, 100)
p[1].setY(17, 100)
p[2].setZ(0, 100)
p[2].setZ(11, 100)
p[2].setZ(17, 100)

// Z- Y+ X+
p[3].setX(1, 100)
p[3].setX(9, 100)
p[3].setX(20, 100)
p[4].setY(1, 100)
p[4].setY(9, 100)
p[4].setY(20, 100)
p[5].setZ(1, -100)
p[5].setZ(9, -100)
p[5].setZ(20, -100)

// Z+ Y- X+
p[6].setX(2, 100)
p[6].setX(13, 100)
p[6].setX(19, 100)
p[7].setY(2, -100)
p[7].setY(13, -100)
p[7].setY(19, -100)
p[8].setZ(2, 100)
p[8].setZ(13, 100)
p[8].setZ(19, 100)

// Z- Y- X+
p[9].setX(3, 100)
p[9].setX(15, 100)
p[9].setX(22, 100)
p[10].setY(3, -100)
p[10].setY(15, -100)
p[10].setY(22, -100)
p[11].setZ(3, -100)
p[11].setZ(15, -100)
p[11].setZ(22, -100)

// Z- Y+ X-
p[12].setX(4, -100)
p[12].setX(8, -100)
p[12].setX(21, -100)
p[13].setY(4, 100)
p[13].setY(8, 100)
p[13].setY(21, 100)
p[14].setZ(4, -100)
p[14].setZ(8, -100)
p[14].setZ(21, -100)

// Z+ Y+ X-
p[15].setX(5, -100)
p[15].setX(10, -100)
p[15].setX(16, -100)
p[16].setY(5, 100)
p[16].setY(10, 100)
p[16].setY(16, 100)
p[17].setZ(5, 100)
p[17].setZ(10, 100)
p[17].setZ(16, 100)

// Z- Y- X-
p[18].setX(6, -100)
p[18].setX(14, -100)
p[18].setX(23, -100)
p[19].setY(6, -100)
p[19].setY(14, -100)
p[19].setY(23, -100)
p[20].setZ(6, -100)
p[20].setZ(14, -100)
p[20].setZ(23, -100)

// Z+ Y- X-
p[21].setX(7, -100)
p[21].setX(12, -100)
p[21].setX(18, -100)
p[22].setY(7, -100)
p[22].setY(12, -100)
p[22].setY(18, -100)
p[23].setZ(7, 100)
p[23].setZ(12, 100)
p[23].setZ(18, 100)

omnicube.morphAttributes.position = p
omnicube.userData.morphMap = morphMap

export default omnicube
