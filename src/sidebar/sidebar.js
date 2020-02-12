import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import styles from './styles'
import List from '@material-ui/core/List'
import { Divider, Button } from '@material-ui/core'
import SidebarItemComponent from '../sidebarItem/sidebarItem'

class SidebarComponent extends Component {
	constructor() {
		super()
		this.state = {
			addingNote: false,
			title: null
		}
	}
	render() {
		const { classes, notes, selectedNoteIndex } = this.props

		if ((notes !== null && notes.length > 0) || this.state.addingNote) {
			return (
				<div className={classes.sidebarContainer}>
					<Button onClick={this.newNoteBtnClick} className={classes.newNoteBtn}>
						{!this.state.addingNote ? 'New Note' : 'Cancel'}
					</Button>
					{this.state.addingNote ? (
						<div>
							<input
								type='text'
								className={classes.newNoteInput}
								placeholder='Enter note title'
								onKeyUp={e => this.updateTitle(e.target.value)}
							/>
							<Button className={classes.newNoteSubmitBtn} onClick={this.newNote}>
								Submit Note
							</Button>
						</div>
					) : null}
					<List>
						{notes.map((_note, _index) => {
							return (
								<div key={_index}>
									<SidebarItemComponent
										_note={_note}
										_index={_index}
										selectedNoteIndex={selectedNoteIndex}
										selectNote={this.selectNote}
										deleteNote={this.deleteNote}
									/>
									<Divider />
								</div>
							)
						})}
					</List>
				</div>
			)
		} else {
			return (
				<div className={classes.sidebarContainer}>
					<Button onClick={this.newNoteBtnClick} className={classes.newNoteBtn}>
						{!this.state.addingNote ? 'New Note' : 'Cancel'}
					</Button>
					<div>Add a note</div>
				</div>
			)
		}
	}

	newNoteBtnClick = () => {
		this.setState({
			title: null,
			addingNote: !this.state.addingNote
		})
	}

	updateTitle = txt => {
		this.setState({ title: txt })
	}

	newNote = () => {
		this.props.newNote(this.state.title)
		this.setState({ title: null, addingNote: false })
	}

	selectNote = (n, i) => this.props.selectNote(n, i)

	deleteNote = note => {
		this.props.deleteNote(note)
	}
}

export default withStyles(styles)(SidebarComponent)
