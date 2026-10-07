import { ColliderLayer, Entity, GltfContainer, Transform, engine } from '@dcl/sdk/ecs'
import { Quaternion, Vector3 } from '@dcl/sdk/math'

const PLANE_SRC      = 'assets/models/plane.gltf'
const PLANE_POSITION = Vector3.create(8, 0, 10)
const PLANE_ROTATION = Quaternion.fromEulerDegrees(0, 180, 0)


// MARK: spawnAlphaPlane
/**
 * Spawns the alpha-blended GLTF plane facing the default spawn, so overlay UI can sit in front of it.
 */
export function spawnAlphaPlane(): Entity {
	const plane = engine.addEntity()

	Transform.create(plane, {
		position: PLANE_POSITION,
		rotation: PLANE_ROTATION
	})

	GltfContainer.create(plane, {
		src                         : PLANE_SRC,
		visibleMeshesCollisionMask  : ColliderLayer.CL_NONE,
		invisibleMeshesCollisionMask: ColliderLayer.CL_NONE
	})

	console.log('AlphaPlane: spawnAlphaPlane: spawned ' + PLANE_SRC + ' at 8, 0, 10 facing spawn')

	return plane
}
