install: install-nimbus

install-nimbus: install-simple-menu
	@rm --force --recursive ~/.local/share/plasma/layout-templates/com.github.kchatsatourian.nimbus/
	@mkdir --parents ~/.local/share/plasma/layout-templates/com.github.kchatsatourian.nimbus/
	@cp --recursive contents/ ~/.local/share/plasma/layout-templates/com.github.kchatsatourian.nimbus/contents/
	@cp metadata.json ~/.local/share/plasma/layout-templates/com.github.kchatsatourian.nimbus/

install-simple-menu:
    @git clone https://github.com/KDE/plasma-simplemenu.git
    @mkdir --parents ~/.local/share/plasma/plasmoids/
    @mv plasma-simplemenu/package/ ~/.local/share/plasma/plasmoids/org.kde.plasma.simplemenu/
    @rm --force --recursive plasma-simplemenu/
