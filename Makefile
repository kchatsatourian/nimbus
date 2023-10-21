install:
	@rm --force --recursive ~/.local/share/plasma/layout-templates/com.github.kchatsatourian.nimbus/
	@mkdir --parents ~/.local/share/plasma/layout-templates/com.github.kchatsatourian.nimbus/
	@cp --recursive contents/ ~/.local/share/plasma/layout-templates/com.github.kchatsatourian.nimbus/contents/
	@cp metadata.json ~/.local/share/plasma/layout-templates/com.github.kchatsatourian.nimbus/
