import { Entity, Font, TextAlignMode, TextShape, Transform, engine } from '@dcl/sdk/ecs'
import { Color3, Color4, Quaternion, Vector3 } from '@dcl/sdk/math'

const UI_FORWARD_OFFSET = 0.15

type OverlayLabel = {
	text      : string
	position  : Vector3
	fontSize  : number
	textColor : Color4
	font      : Font
	textAlign : TextAlignMode
	wrapping  : boolean
	width     : number
	height    : number
}

const OVERLAY_LABELS: OverlayLabel[] = [
	{
		text     : 'Title',
		position : Vector3.create(0, 0.78, 0),
		fontSize : 2.2,
		textColor: Color4.create(1, 0.85, 0.2, 1),
		font     : Font.F_SANS_SERIF,
		textAlign: TextAlignMode.TAM_MIDDLE_CENTER,
		wrapping : false,
		width    : 3.2,
		height   : 0.4
	},
	{
		text     : 'Lorem ipsum dolor sit',
		position : Vector3.create(0, 0.54, 0.02),
		fontSize : 0.85,
		textColor: Color4.create(0.85, 0.85, 0.9, 1),
		font     : Font.F_SERIF,
		textAlign: TextAlignMode.TAM_MIDDLE_CENTER,
		wrapping : false,
		width    : 3.2,
		height   : 0.25
	},
	{
		text     : 'Label',
		position : Vector3.create(-0.95, 0.3, 0),
		fontSize : 1.1,
		textColor: Color4.create(1, 0.25, 0.25, 1),
		font     : Font.F_SANS_SERIF,
		textAlign: TextAlignMode.TAM_MIDDLE_LEFT,
		wrapping : false,
		width    : 1.2,
		height   : 0.3
	},
	{
		text     : '00:00',
		position : Vector3.create(0.95, 0.3, 0.04),
		fontSize : 1.1,
		textColor: Color4.create(0.4, 0.95, 1, 1),
		font     : Font.F_MONOSPACE,
		textAlign: TextAlignMode.TAM_MIDDLE_RIGHT,
		wrapping : false,
		width    : 1.2,
		height   : 0.3
	},
	{
		text     : 'Item one',
		position : Vector3.create(-0.95, 0.06, 0),
		fontSize : 1,
		textColor: Color4.White(),
		font     : Font.F_SANS_SERIF,
		textAlign: TextAlignMode.TAM_MIDDLE_LEFT,
		wrapping : false,
		width    : 1.6,
		height   : 0.28
	},
	{
		text     : '100',
		position : Vector3.create(0.95, 0.06, 0.02),
		fontSize : 1,
		textColor: Color4.create(1, 0.84, 0.2, 1),
		font     : Font.F_MONOSPACE,
		textAlign: TextAlignMode.TAM_MIDDLE_RIGHT,
		wrapping : false,
		width    : 1,
		height   : 0.28
	},
	{
		text     : 'Item two',
		position : Vector3.create(-0.95, -0.18, 0.06),
		fontSize : 1,
		textColor: Color4.create(0.9, 0.9, 0.95, 1),
		font     : Font.F_SANS_SERIF,
		textAlign: TextAlignMode.TAM_MIDDLE_LEFT,
		wrapping : false,
		width    : 1.6,
		height   : 0.28
	},
	{
		text     : '200',
		position : Vector3.create(0.95, -0.18, 0),
		fontSize : 1,
		textColor: Color4.create(0.8, 0.85, 0.95, 1),
		font     : Font.F_MONOSPACE,
		textAlign: TextAlignMode.TAM_MIDDLE_RIGHT,
		wrapping : false,
		width    : 1,
		height   : 0.28
	},
	{
		text     : 'Item three',
		position : Vector3.create(-0.95, -0.42, 0.02),
		fontSize : 1,
		textColor: Color4.create(0.82, 0.7, 0.5, 1),
		font     : Font.F_SANS_SERIF,
		textAlign: TextAlignMode.TAM_MIDDLE_LEFT,
		wrapping : false,
		width    : 1.6,
		height   : 0.28
	},
	{
		text     : '300',
		position : Vector3.create(0.95, -0.42, 0.08),
		fontSize : 1,
		textColor: Color4.create(0.82, 0.7, 0.5, 1),
		font     : Font.F_MONOSPACE,
		textAlign: TextAlignMode.TAM_MIDDLE_RIGHT,
		wrapping : false,
		width    : 1,
		height   : 0.28
	},
	{
		text     : 'Lorem ipsum dolor sit amet.',
		position : Vector3.create(-0.95, -0.72, 0),
		fontSize : 0.55,
		textColor: Color4.create(0.75, 0.78, 0.85, 1),
		font     : Font.F_SERIF,
		textAlign: TextAlignMode.TAM_MIDDLE_LEFT,
		wrapping : true,
		width    : 1.8,
		height   : 0.45
	},
	{
		text     : 'Button',
		position : Vector3.create(0.95, -0.72, 0.04),
		fontSize : 0.95,
		textColor: Color4.create(0.3, 1, 0.45, 1),
		font     : Font.F_SANS_SERIF,
		textAlign: TextAlignMode.TAM_MIDDLE_RIGHT,
		wrapping : false,
		width    : 1.6,
		height   : 0.3
	}
]


// MARK: spawnTextShapeUi
/**
 * Creates a dozen in-world TextShape labels parented in front of the alpha plane for overlay visibility testing.
 */
export function spawnTextShapeUi(
	parent: Entity
): void {
	const uiRoot = engine.addEntity()

	Transform.create(uiRoot, {
		parent  : parent,
		position: Vector3.create(0, 1, UI_FORWARD_OFFSET),
		rotation: Quaternion.fromEulerDegrees(0, 180, 0)
	})

	for (const label of OVERLAY_LABELS) {
		createOverlayLabel(uiRoot, label)
	}

	console.log('TextShapeUi: spawnTextShapeUi: spawned ' + OVERLAY_LABELS.length + ' overlay labels facing spawn')
}


// MARK: createOverlayLabel
/**
 * Spawns one TextShape child on the overlay root.
 */
function createOverlayLabel(
	parent: Entity,
	label : OverlayLabel
): Entity {
	const entity = engine.addEntity()

	Transform.create(entity, {
		parent  : parent,
		position: label.position
	})

	TextShape.create(entity, {
		text         : label.text,
		font         : label.font,
		fontSize     : label.fontSize,
		textColor    : label.textColor,
		textAlign    : label.textAlign,
		textWrapping : label.wrapping,
		width        : label.width,
		height       : label.height,
		outlineWidth : 0.12,
		outlineColor : Color3.create(0, 0, 0)
	})

	return entity
}
