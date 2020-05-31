'use babel';
const SkipTagTabIndexObserver = () => {
    // Update time when Editor Header is updated
    requestAnimationFrame(() => {
        const element = document.querySelector(".note-tags-bar-input input");
        if (element) {
            // Skip tab index
            element.tabIndex = -1;
        }
    })
    return null;
}
module.exports = {
    activate() {
        inkdrop.components.registerClass(SkipTagTabIndexObserver);
        inkdrop.layouts.addComponentToLayout(
            'editor-meta',
            'SkipTagTabIndexObserver'
        );
    },

    deactivate() {
        inkdrop.layouts.ObserverEditorHeaderLayout(
            'editor-meta',
            'SkipTagTabIndexObserver'
        )
        inkdrop.components.deleteClass(SkipTagTabIndexObserver)
    }
};
