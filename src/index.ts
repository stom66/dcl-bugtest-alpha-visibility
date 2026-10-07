import { spawnAlphaPlane } from 'src/alphaPlane'
import { spawnTextShapeUi } from 'src/textShapeUi'


// MARK: main
/**
 * Scene entry point. Spawns the alpha-blended plane and the overlay TextShape UI used to reproduce the visibility bug.
 */
export function main() {
	const plane = spawnAlphaPlane()
	spawnTextShapeUi(plane)
}
